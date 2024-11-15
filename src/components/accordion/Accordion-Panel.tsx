import { Show } from '@/types/ShowTypes';
import { useState } from 'react';
import './styles.scss';

type AccordionPanelProps = {
  title: string;
  content: Show;
};

function AccordionPanel(props: AccordionPanelProps) {
  const { title, content } = props;
  const [isActive, setIsActive] = useState(false);

  const renderPanelContent = (content: Show) => {
    return content.map((paragraph: string, index: number) => {
      return <div key={index}>{paragraph}</div>;
    });
  };

  return (
    <div className="accordion-panel">
      <label className={`accordion-title ${isActive ? 'accordion-twisty' : ''}`} onClick={() => setIsActive(!isActive)}>
        {title}
      </label>
      {isActive && (
        <div aria-expanded={isActive} className="accordion-content">
          {renderPanelContent(content)}
        </div>
      )}
    </div>
  );
}

export default AccordionPanel;
