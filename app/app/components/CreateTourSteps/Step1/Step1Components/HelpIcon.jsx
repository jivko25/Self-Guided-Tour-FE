import { Tooltip as ReactTooltip } from 'react-tooltip';
import Image from "next/image";
import HelpIcon from '../../../../public/help-circle-outline.svg';


const HelpIconInfo = ({
    styles,
    id,
    content
}) => {
  return (
    <>
          
          <p className={styles} data-tooltip-id={id}>
            <Image src={HelpIcon} width={24} height={24} alt="Help icon" />
          </p>
          <ReactTooltip
          id={id}
          place="right"
          variant="info"
          content={content}
        />
        </>
  )
}

export default HelpIconInfo