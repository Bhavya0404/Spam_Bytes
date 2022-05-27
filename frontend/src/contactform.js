import React from 'react';
import { input } from './components/input';
import { address } from './components/address';
import { image } from './components/image';

class contactform extends React.Component {
state = {
imageState: false
}
render() {
const {
handleSubmit,
pristine,
submitting,
submitCb,
valid,
SetImage,
loading
} = this.props;
return (
<form onSubmit={handleSubmit(submitCb).bind(this)}
onClick={this.resetValues}>
<Field
name="email"
type="email"
label='Email'
className='form-control'
component={input}
/>
<Field
name="title"
type="text"
label='Title'
className='form-control'
component={input}
/>
<Field
name="message"
type="text"
label='Description'
rows='6'
className='form-control'
component={address}
/>
<Field
name="image"
label='Image'
className='form-control'
component={image}
props={{
changedImage: (e) => {
SetImage(e);
this.setState({
imageState: true
})
},
checkImageState: (e) => {
if (e === 'selected') {
this.setState({
imageState: true
});
} else {
this.setState({
imageState: false
});
}
},
}}
key={this.props.key}
/>
{
loading ?
<button
className='btn btn-primary'
type="button"
disabled={true}
>
Sending...
</button>
:
<button
className='btn btn-primary'
type="submit"
disabled={!valid || pristine || submitting || !this.state.imageState}
>
Send
</button>
}
</form>
)
}
}
const validate = values => {
const errors = {};
if (!values.email) {
errors.email = 'Please enter email!';
}
if (!values.title) {
errors.title = 'Please enter address!';
}
if (!values.message) {
errors.message = 'Please enter image!';
}
return errors;
}
export default reduxForm({
form: 'contactform',
validate
})(contactform)