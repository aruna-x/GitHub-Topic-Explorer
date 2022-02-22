// Libraries
import { Fragment } from "react";

// Components, Modules, Styles
import { RelatedLink } from "../style/global";
import { BreadWrapper } from "../style/breadcrumb";

function Breadcrumbs({ setTopic, breadcrumbs, setBreadbrumbs, generateKey }) {
  // when breadcrumb is clicked: remove subsequent breadcrumbs & set new topic
  function breadcrumbClick(index) {
    setBreadbrumbs((b) => b.slice(0, index + 1));
    const newTopic = breadcrumbs[index];
    setTopic(newTopic);
  }

  // maps the breadcrumbs from state to react-friendly list for display
  const BreadcrumbList = () => {
    const length = breadcrumbs.length;
    return (
      <>
        {breadcrumbs.map((b, i) => (
          <Fragment key={generateKey(i)}>
            <RelatedLink onClick={() => breadcrumbClick(i)}>{b}</RelatedLink>
            {i + 1 === length ? <></> : <> > </>}
          </Fragment>
        ))}
      </>
    );
  };

  return (
    <BreadWrapper>
      <BreadcrumbList />
    </BreadWrapper>
  );
}

export default Breadcrumbs;
