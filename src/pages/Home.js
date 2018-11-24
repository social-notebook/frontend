import React, { Component } from 'react';
import {
  Segment,
  Container,
  Header,
  Button,
  Card,
  Divider,
  Icon,
  Grid,
  Image,
  Feed,
} from 'semantic-ui-react';

const events = [
  {
    date: '1 Hour Ago',
    image: 'https://api.adorable.io/avatars/50/abott@adorable.png',
    meta: '4 Likes',
    summary: 'Elliot Fu added you as a friend',
  },
  {
    date: '4 days ago',
    image: 'https://api.adorable.io/avatars/50/abott@adorable.png',
    meta: '1 Like',
    summary: 'Helen Troy added 2 new illustrations',
  },
  {
    date: '3 days ago',
    image: 'https://api.adorable.io/avatars/50/abott@adorable.png',
    meta: '8 Likes',
    summary: 'Joe Henderson posted on his page',
    extraText:
      "Ours is a life of constant reruns. We're always circling back to where we'd we started.",
  },
  {
    date: '4 days ago',
    image: 'https://api.adorable.io/avatars/50/abott@adorable.png',
    meta: '41 Likes',
    summary: 'Justen Kitsune added 2 new photos of you',
    extraText:
      'Look at these fun pics I found from a few years ago. Good times.',
  },
];

const notebooks = [
  {
    id: 1,
    title: 'Breaking The Grid, Grabs Your Attention',
    description:
      'Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive',
    content:
      'Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic and worth your attention.',
    author: 'Duc Binh',
    date: '19/11/2019',
  },
  {
    id: 2,
    title: 'Did We Tell You About Our Bananas?',
    description:
      'Yes I know you probably disreally dance. but our bananas can really dance. but our bananas can really dance.but our bananas can really dance. but our bananas can really dance.but our bananas can really dance.',
    content:
      "Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but it's really true. It took years of gene splicing and combinatory DNA research, but our bananas can really dance.",
    author: 'Le Loi',
    date: '17/12/2017',
  },
  {
    id: 3,
    title: 'Breaking The Grid, Grabs Your Attention',
    description:
      'Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive',
    content:
      'Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic and worth your attention.',
    author: 'Duc Binh',
    date: '19/11/2019',
  },
  {
    id: 4,
    title: 'Breaking The Grid, Grabs Your Attention',
    description:
      'Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive',
    content:
      'Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic and worth your attention.',
    author: 'Duc Binh',
    date: '19/11/2019',
  },
];
const cardStyle = {
  width: '600px',
  height: '200px',
};
const cardContentStyle = {
  textAlign: 'left',
  paddingLeft: '0',
  paddingRight: '0',
};

const cardHeaderStyle = {
  paddingTop: '10px',
  paddingBottom: '20px',
  paddingLeft: '15px',
  paddingRight: '15px',
  backgroundColor: '#dddddd',
};
const cardDescriptionStyle = {
  height: '90px',
  paddingLeft: '15px',
  paddingRight: '15px',
  marginTop: '10px',
  marginBottom: '10px',
};

const cardDate = {
  float: 'right',
  marginRight: '15px',
};

const cardAuthor = {
  float: 'left',
  marginLeft: '15px',
};

export default class Home extends Component {
  renderNotebooks = () => {
    const notebookCards = notebooks.map(notebook => (
      <Card key={notebook.id} style={cardStyle}>
        <Card.Content style={cardContentStyle}>
          <Card.Header style={cardHeaderStyle}>{notebook.title}</Card.Header>
          {/* <Card.Meta>Co-Worker</Card.Meta> */}
          <Card.Description style={cardDescriptionStyle}>
            {notebook.description}
          </Card.Description>
          <Card.Content extra>
            <a style={cardAuthor}>
              <Icon name="user" />
              {notebook.author}
            </a>
            <Card.Meta style={cardDate}>
              <span className="date">{notebook.date}</span>
            </Card.Meta>
          </Card.Content>
        </Card.Content>
      </Card>
    ));
    return notebookCards;
  };

  render() {
    return (
      <Segment style={{ padding: '8em 0em' }} vertical>
        {/* <Container> */}
        <Grid>
          <Grid.Row>
            <Grid.Column width={3} />
            <Grid.Column width={7}>
              <h2>Your Notebooks</h2>
              {this.renderNotebooks()}
            </Grid.Column>
            <Grid.Column width={2} />
            <Grid.Column width={2}>
              <h3>Activity Feed</h3>
              <Feed events={events} />
            </Grid.Column>
            <Grid.Column width={2} />
          </Grid.Row>
        </Grid>

        {/* <Card.Group> */}
        {/* <Card>
            <Card.Content>
              <Card.Header>Matthew Harris</Card.Header>
              <Card.Meta>Co-Worker</Card.Meta>
              <Card.Description>
                Matthew is a pianist living in Nashville.
              </Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header content="Jake Smith" />
              <Card.Meta content="Musicians" />
              <Card.Description content="Jake is a drummer living in New York." />
            </Card.Content>
          </Card> */}
        {/* </Card.Group> */}
        {/* </Container> */}
      </Segment>
    );
  }
}
