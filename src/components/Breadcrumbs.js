// Libraries
import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Components, Modules, Styles
import { RelatedLink } from "../style/global.style";
import { BreadWrapper } from "../style/breadcrumbs.style";

function Breadcrumbs({ generateKey }) {
  // state
  const dispatch = useDispatch();
  const breadcrumbs = useSelector(s => s.breadcrumbs);

  // when breadcrumb is clicked: remove subsequent breadcrumbs & set new topic
  function breadcrumbClick(index) {
    dispatch({type: "BREADCRUMB_CLICK", payload: breadcrumbs.slice(0,index+1)});
    const newTopic = breadcrumbs[index];
    dispatch({type: "SET_TOPIC", payload: newTopic})

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
