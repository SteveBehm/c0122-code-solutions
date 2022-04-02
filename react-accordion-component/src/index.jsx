import React from 'react';
import ReactDOM from 'react-dom/client';
import { Accordion } from './accordion';

const topics = [
  {
    id: '001',
    title: 'Hypertext Markup Language',
    content: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Morbi gravida, dui ac eleifend luctus, eros magna posuere
                lorem, id fringilla massa leo et tellus.Morbi at tortor
                vitae lectus tempus pharetra ut id dui.Vivamus a blandit
                elit, eu convallis mauris.In quis gravida orci, ac
                tincidunt tortor.Nunc mollis diam id purus consequat
                interdum nec nec sapien.Etiam vestibulum odio ac sem
                lacinia eleifend.Curabitur fermentum ornare ornare.Duis
                efficitur dui at ex venenatis porta.Mauris quis arcu et
                justo varius vestibulum a aliquam diam.Cras a dui vitae. `
  },
  {
    id: '002',
    title: 'Cascading Style Sheets',
    content: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Morbi gravida, dui ac eleifend luctus, eros magna posuere
                lorem, id fringilla massa leo et tellus.Morbi at tortor
                vitae lectus tempus pharetra ut id dui.Vivamus a blandit
                elit, eu convallis mauris.In quis gravida orci, ac
                tincidunt tortor.Nunc mollis diam id purus consequat
                interdum nec nec sapien.Etiam vestibulum odio ac sem
                lacinia eleifend.Curabitur fermentum ornare ornare.Duis
                efficitur dui at ex venenatis porta.Mauris quis arcu et
                justo varius vestibulum a aliquam diam.Cras a dui vitae. `
  },
  {
    id: '003',
    title: 'JavaScript',
    content: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Morbi gravida, dui ac eleifend luctus, eros magna posuere
                lorem, id fringilla massa leo et tellus.Morbi at tortor
                vitae lectus tempus pharetra ut id dui.Vivamus a blandit
                elit, eu convallis mauris.In quis gravida orci, ac
                tincidunt tortor.Nunc mollis diam id purus consequat
                interdum nec nec sapien.Etiam vestibulum odio ac sem
                lacinia eleifend.Curabitur fermentum ornare ornare.Duis
                efficitur dui at ex venenatis porta.Mauris quis arcu et
                justo varius vestibulum a aliquam diam.Cras a dui vitae. `
  }

];

const element = (
  <Accordion topics={topics}/>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
