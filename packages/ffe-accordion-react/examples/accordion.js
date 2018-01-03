import React from 'react';
import {render} from 'react-dom';
import { AccordionItem, WhiteAccordion, BlueAccordion } from '../src';

require('./example.less');

const items = [
    {
        title: 'What is Lorem Ipsum?',
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the
            1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum.`,
    },
    {
        title: 'Why do we use it?',
        content: `It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using Lorem Ipsum is that it
            has a more-or-less normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
            ipsum' will uncover many web sites still in their infancy. Various versions have evolved
            over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
    },
    {
        title: 'Where does it come from?',
        content: `It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using Lorem Ipsum is that it
            has a more-or-less normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
            ipsum' will uncover many web sites still in their infancy. Various versions have evolved
            over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
    },
    {
        title: (
            <span className="ffe-accordion-item__title">
                <span>What is Lorem Ipsum?</span>
                <span className="ffe-small-text">Sub-description of the contents</span>
            </span>
        ),
        content: `It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using Lorem Ipsum is that it
            has a more-or-less normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
            ipsum' will uncover many web sites still in their infancy. Various versions have evolved
            over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
    }
];

const mappedItems = items.map((item, index) => (
    <AccordionItem
        expandedContent={item.content}
        index={index}
        isOpen={index === 0}
        key={index}
    >
        {item.title}
    </AccordionItem>
));

render(
    <div>
        <h1 className="ffe-h1">Accordion Example</h1>
        <div className="ffe-input-group">
            <h1>WhiteAccordion</h1>
            <WhiteAccordion>{mappedItems}</WhiteAccordion>
        </div>
        <div className="ffe-input-group">
            <h1>BlueAccordion</h1>
            <BlueAccordion>{mappedItems}</BlueAccordion>
        </div>
    </div>
    , document.body
);
