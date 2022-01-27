import styled from '@emotion/styled'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import LightbulbIcon from '@mui/icons-material/Lightbulb';

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function ActionAreaCard({
  title = "Title",
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Head>
          <LightbulbIcon
            fontSize="large" 
            color="primary" 
            sx={{ 
              align: "center",
              display: "flex-inline",
              fontSize: 100,
            }}
          /> 
        </Head>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            { title }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
