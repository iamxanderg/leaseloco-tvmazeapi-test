import { Season, Show } from '@/types/ShowTypes';
import AccordionPanel from './Accordion-Panel';
import './styles.scss';

type AccordionProps = {
  data: Show;
};

function Accordion(props: AccordionProps) {
  const { data } = props;

  const renderPanels = () => {
    return data.map((item: Season, index: number) => {
      const { title, content } = item;

      return <AccordionPanel key={`accordion-panel-${index}`} title={title} content={content} />;
    });
  };

  return <div className="accordion">{renderPanels()}</div>;
}

export default Accordion;
