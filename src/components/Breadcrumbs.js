// Libraries
import { Fragment } from 'react';

// Components, Modules, Styles
import { RelatedLink } from "../style/global";
import { BreadWrapper } from "../style/breadcrumbs";

function Breadcrumbs({ setTopic, breadcrumbs, setBreadbrumbs, generateKey }) {
  // when breadcrumb is clicked: remove subsequent breadcrumbs & set new topic
  function breadcrumbClick(index) {
    setBreadbrumbs((b) => b.slice(0, index + 1));
    const newTopic = breadcrumbs[index];
    setTopic(newTopic);
  }

  // maps the breadcrumbs from state to react-friendly list for display
  const RenderBreadcrumbs = (b, index) => {
    const length = breadcrumbs.length;
    return (
      <Fragment key={generateKey(index)}>
        <RelatedLink onClick={() => breadcrumbClick(index)}>{b}</RelatedLink>
        {index + 1 === length ? <></> : <> > </>}
      </Fragment>
    );
  }

  const BreadcrumbList = () => {
    return (
      <BreadWrapper>
        {breadcrumbs.map(RenderBreadcrumbs)}
      </BreadWrapper>
    );
  };

  return <BreadcrumbList />;
}

export default Breadcrumbs;
