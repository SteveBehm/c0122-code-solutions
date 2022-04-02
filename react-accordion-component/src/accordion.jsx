import React from 'react';

export class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentView: null };
    this.handleClick = this.handleClick.bind(this);
  }

  // adding an event parameter will let us use the event.target in order to get
  // data on the title that was clicked
  handleClick(event) {
    // this will determine the topicID depending on what title is clicked on
    // we will need to assign the h3 variable an id value that matches the id
    // from the topics array of objects
    const topicID = event.target.id;
    // if the currentView matches the topicID and there is a click
    // let's switch the currentView to null
    // this will cause the ternaru operator to evaluate to false
    // and the hidden class being applied to the paragraph
    if (this.state.currentView === topicID) {
      this.setState({
        currentView: null
      });
      // if the current view is null and there has been a click on the title
      // lets give the current view the value of the topicID
      // the ternary operator will evaluate to be true and the class for the
      // paragraph element will be content and no longer include hidden
    } else {
      this.setState({
        currentView: topicID
      });
    }
  }

  render() {
    // here we are taking the topics object from the index.jsx file
    // props is imported when we build are constructor function
    const topics = this.props.topics;
    // now we are going to map out our list for each object in the array
    // and assign it to a variable for use in our return statement
    const topicsList = topics.map(topic =>
      // each list item needs a key which acts as a unique identifier
      // each li will have a h3 and a p element
      // we want to listen to clicks on the h3 element and assign it an id
      // for the children of the h3 and p elements we can use a javascript expression
      // that pulls from the topics object
      <li key={topic.id}>
        <h3 onClick={this.handleClick} id={topic.id} className="title">
          {topic.title}
        </h3>
        <p className={this.state.currentView === topic.id ? 'content' : 'content hidden'}>
          {topic.content}
        </p>
      </li>);
    return (
      <>
        <div className='accordion'>
           <ul>
            {topicsList}
           </ul>
        </div>
      </>
    );
  }
}
