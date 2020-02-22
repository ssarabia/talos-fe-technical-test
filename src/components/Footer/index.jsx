import React from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

import './Footer.scss'

function App () {
  return (
    <div className="footer-container">
      <Container maxWidth='xl'>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={3}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum temporibus facilis facere sapiente, ut, quaerat laborum ipsum rerum ea porro dignissimos ratione, laudantium voluptatum maxime? Obcaecati accusantium nulla magnam possimus.
          </Grid>
          <Grid item xs={12} sm={3} >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ullam sapiente, sunt pariatur atque perspiciatis doloribus distinctio ab culpa incidunt officiis adipisci, dignissimos necessitatibus aperiam porro, deleniti a laborum hic.
          </Grid>
          <Grid item xs={12} sm={3} >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex fugit perferendis harum, incidunt neque quisquam asperiores distinctio numquam dicta eligendi libero dolor officiis vel delectus expedita nihil, laborum ab dignissimos.
          </Grid>
          <Grid item xs={12} sm={3} >
            <ul>
              <li>Lorem ipsum</li>
              <li>Dolor, Sit amet</li>
              <li>Consectetur adipisicing</li>
              <li>Ex fugit perferendis</li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default App
