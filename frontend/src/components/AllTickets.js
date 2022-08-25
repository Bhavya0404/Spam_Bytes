
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Button } from '@mui/material'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SideBar from '../components/Sidebar'
import CancelIcon from '@mui/icons-material/Cancel'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import sidebarMenus from '../components/sidebarMenus'
const AllTickets = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <SideBar
        nSections={sidebarMenus.nodal.nSections}
        sectionList={sidebarMenus.nodal.sectionList}
        header={sidebarMenus.nodal.header}
      />

      {/* Table for XL Screens to L Screens */}
      <TableContainer
        sx={{
          display: { xs: 'none', lg: 'inherit' },
          mx: '20px',
          mt: '100px',
          maxHeight: '500px',
        }}
      >
        <Table stickyHeader component={Paper}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>

            <TableBody>
                <TableRow>
                    <TableCell>Chotu Bacha</TableCell>
                    <TableCell>Chotu Bacha</TableCell>
                    <TableCell>Chotu Bacha</TableCell>
                    <TableCell>
                    <Button
                      size="medium"
                      variant="contained"
                    //   onClick={() => navigate(`/ngo/child/${child?._id}`)}
                    >
                      <ArrowRightAltIcon />
                      <Typography
                        component="span"
                        sx={{
                          display: { xs: 'none', md: 'block' },
                          fontSize: '14px',
                        }}
                      >
                        View Details
                      </Typography>
                      
                    </Button>
                    </TableCell>
                </TableRow>
            </TableBody>
          
        </Table>
      </TableContainer>
      </Box>
  )
}

export default AllTickets