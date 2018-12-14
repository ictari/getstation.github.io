import React from 'react';
import { graphql } from 'gatsby';
import App from '../components/layout/App';
import Hero from '../components/organims/Hero';
import TeamSection1 from '../components/organims/TeamSection1';
import TeamManifesto from '../components/organims/TeamManifesto';

const Presskit = props => {
  const DATA = props.data.team.data;
  return (
    <App>
      <Hero
        title={DATA.hero_title}
        subtitle={DATA.hero_baseline}
        gradient={{
          top: DATA.hero_gradient_top,
          bottom: DATA.hero_gradient_bottom,
        }}
      />
      <TeamSection1
        text={DATA.section_1_text.html}
        button={{
          url: DATA.section_1_button_url,
          text: DATA.section_1_button_text,
          type: DATA.section_1_button_type,
          theme: DATA.section_1_button_theme,
        }}
        members={DATA.member}
      />
      <TeamManifesto
        data={DATA.manifesto}
        button={{
          url: DATA.section_1_button_url,
          text: DATA.section_1_button_text,
          type: DATA.section_1_button_type,
          theme: DATA.section_1_button_theme,
        }}
      />
    </App>
  );
};

export default Presskit;
export const pageQuery = graphql`
  query teamQuery {
    team: prismicTeam {
      data {
        hero_title
        hero_baseline
        hero_gradient_top
        hero_gradient_bottom
        section_1_text {
          html
        }
        section_1_button_url
        section_1_button_text
        section_1_button_type
        section_1_button_theme
        member {
          thumb {
            url
            dimensions {
              width
              height
            }
          }
          name
          job
          twitter
          instagram
          personal_link
          github
        }
        manifesto {
          title
          title_color
          subtitle
          content {
            html
          }
        }
        timeline_title
        timeline_text
        timeline_event {
          date
          title
          url
          text
          thumb {
            url
            dimensions {
              width
              height
            }
          }
        }
      }
    }
  }
`;
