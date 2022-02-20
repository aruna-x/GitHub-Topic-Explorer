// Libraries
import { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';

function RelatedTopics({topic, setTopic, setBreadcrumbs}) {

    function relatedClick(relatedTopic) {
        // Add link to breadcrumbs
        setBreadcrumbs(c => [...c, relatedTopic]);

        // Setting topic will cause RelatedTopics to rerender with new data
        setTopic(relatedTopic)
      }

    const QUERY = gql`
        query ($topic: String!){
            topic(name: $topic) {
                stargazerCount
                relatedTopics(first: 10) {
                    name
                    stargazers {
                        totalCount
                    }
                }
            }
        }`
    
    const { loading, error, data } = useQuery(QUERY, {
        variables: { topic: topic }
    });

    if (loading) console.log("Loading...");
    if (error) console.error(error);

    console.log(data)
        
    const RenderRelated = (t) => {
        return (
            <p>
                <RelatedLink onClick={()=>relatedClick(t.name)} key={t.name}>{t.name}</RelatedLink> ({t.stargazers.totalCount})
            </p>
        )
    }

    return data ? data.topic.relatedTopics.map(RenderRelated) : <></>;
}

export default RelatedTopics;

const RelatedLink = styled.span`
    color: blue;
    text-decoration: underline;

    &:hover {
        cursor: pointer;
    }
`