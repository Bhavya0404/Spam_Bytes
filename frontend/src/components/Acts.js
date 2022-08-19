import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";


function createData(name, number, district) {
  return { name, number, district };
}
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const rows = [
  createData("Andhra Pradesh ", 12, "Vizianagaram, Visakhapatanam, Krishna, Anantapur, Kurnool, West Godavari, Prakasam, Srikakulam, Spsr Nellore, Guntur, East Godavari, Chittoor "),
  createData("Assam", 5, "	Lakhimpur, Nagaon, Kamrup Metro, Nalbari, Bongaigaon "),
  createData("Bihar", 23, "Araria, Samastipur, Purbi Champaran, Kishanganj, Banka, Saran, Bhagalpur, Jamui, Nawada, Madhepura, Supaul, Patna, Nalanda, Madhubani, Muzaffarpur, Darbhanga, Sitamarhi, Purnia, Saharsa, Pashchim Champaran, Gaya, Khagaria, Begusarai "),
  createData("Chhattisgarh", 8, "Raigarh, Dantewada, Rajnandgaon, Durg, Bilaspur, Korba, Surguja, Raipur "),
  createData("Delhi", 1, "	New Delhi "),
  createData("Gujrat", 9, "Vadodara, Banas Kantha, Surat, Rajkot, Kachchh, Ahmadabad, Panch Mahals, Dohad, Bhavnagar "),
  createData("Haryana", 3, "Faridabad, Panipat, Gurugram  "),
  createData("Jammu and Kashmir ", 3, "Jammu, Srinagar "),
  createData("Jharkhand ", 7, "Dumka, Palamu, Pakur, Hazaribagh, Garhwa, Ranchi, West Singhbhum"),
  createData("Karnataka", 16, "Kolar, Belagavi, Bagalkot, Kalaburagi, Ballari, Bengaluru Rural, Mandya, Davangere, Bengaluru Urban, Vijayapura, Koppal, Dharwad, Chitradurga, Haveri, Raichur, Tumakuru "),
  createData("Madhya Pradesh ", 21, "Ratlam, Shajapur, Katni, Damoh, Shivpuri, Jhabua, Chhindwara, Sidhi, Guna, East Nimar, Jabalpur, Sagar, Ujjain, Dhar, Indore, Khargone, Gwalior, Mandsaur, Rewa, Barwani, Satna "),
  createData("Maharashtra ", 16, "Yavatmal, Gondia, Parbhani, Jalna, Nashik, Thane, Nanded, Buldhana, Dhule, Mumbai Suburban, Pune, Sangli, Solapur, Beed, Aurangabad, Nandurbar "),
  createData("Nagaland ", 1, "Dimapur"),
  createData("Odisha", 24, "Cuttack, Ganjam, Malkangiri, Kalahandi, Gajapati, Nuapada, Kendujhar, Sundargarh, Koraput, Bhadrak, Rayagada, Khordha, Dhenkanal, Jajapur, Balangir, Deogarh, Bargarh, Baleshwar, Sambalpur, Nayagarh, Anugul, Jharsuguda, Nabarangpur, Mayurbhanj "),
  createData("Punjab", 3, "	Jalandhar, Ludhiana, Amritsar  "),
  createData("Rajasthan", 27, "Jodhpur, Ganganagar, Bikaner, Churu, Hanumangarh, Jaipur, Sikar, Dholpur, Barmer, Nagaur, Jhunjhunu, Dausa, Ajmer, Udaipur, Bhilwara, Bundi, Dungarpur, Jhalawar, Jalore, Baran, Banswara, Bharatpur, Tonk, Alwar, Pali, Kota, Chittaurgarh  "),
  createData("Tamil Nadu", 18, "Tirunelveli, Coimbatore, Tiruchirappalli, Erode, Namakkal, Salem, Dindigul, Pudukkottai, Vellore, Tiruvannamalai, Thiruvallur, Theni, Krishnagiri, Kanchipuram, Dharmapuri, Virudhunagar, Tuticorin, Chennai "),
  createData("Telangana ", 30, "Bhadradri Kothagudem, Karimnagar, Nalgonda, Medak, Kumuram Bheem Asifabad, Warangal Urban, Siddipet, Nagarkurnool, Mahabubabad, Rajanna Sircilla, Yadadri Bhuvanagiri, Mancherial, Nirmal, Jayashankar Bhupalapally, Wanaparthy, Jogulamba Gadwal, Suryapet, Medchal Malkajgiri, Peddapalli, Nizamabad, Khammam, Mahabubnagar, Adilabad, Jagitial, Hyderabad, Jangoan, Warangal Rural, Sangareddy, Vikarabad, Kamareddy  "),
  createData("Uttarakhand", 13, "Chamoli, Bageshwar, Pithoragarh, Pauri Garhwal, Champawat, Almora, Dehradun, Haridwar, Nainital, Udam Singh Nagar, Uttar Kashi, Tehri Garhwal, Rudra Prayag "),
  createData("Uttar Pradesh ", 52, "Ghazipur, Mau, Kannauj, Gorakhpur, Gonda, Shravasti, Unnao, Faizabad, Etawah, Basti, Banda, Balrampur, Firozabad, Kheri, Ghaziabad, Sitapur, Bareilly, Ballia, Budaun, Bijnor, Rae Bareli, Maharajganj, Kaushambi, Rampur, Aligarh, Sant Kabeer Nagar, Mathura, Moradabad, Meerut, Sultanpur, Saharanpur, Varanasi, Bulandshahr, Azamgarh, Lalitpur, Jhansi, Gautam Buddha Nagar, Hapur, Bahraich, Sambhal, Mirzapur, Mainpuri, Agra, Barabanki, Shahjahanpur, Jaunpur, Sonbhadra, Etah, Pratapgarh, Bhadohi, Kushi Nagar, Hardoi  "),
  createData("West Bengal", 21, "Nadia, Maldah, Dinajpur Dakshin, Dinajpur Uttar, Jalpaiguri, 24 Paraganas South, Purulia, Kolkata, Coochbehar, Murshidabad, Paschim Bardhaman, Darjeeling, Alipurduar, Purba Bardhaman, Hooghly, Medinipur East, Medinipur West, Howrah, Bankura, 24 Paraganas North, Birbhum "),
 

];

const Acts = () => {
  return (
    <box>

 

          <Typography
            variant="h4"
            component="p"
            sx={{
              fontWeight: 600,
              textAlign: "center",
              mb: 5,
              fontSize: { xs: 25, sm: 32 },
            }}
          >
           National Child Labour Project Districts
          </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name of the state</StyledTableCell>
            <StyledTableCell align="right">No. of Districts</StyledTableCell>
            <StyledTableCell align="center">Name of Districts</StyledTableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                 <StyledTableCell component="th" scope="row">
                {row.name}
                </StyledTableCell>
              <StyledTableCell align="right">{row.number}</StyledTableCell>
              <StyledTableCell align="right">{row.district}</StyledTableCell>
                </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
   

    </box>
  );
};

export default Acts;
