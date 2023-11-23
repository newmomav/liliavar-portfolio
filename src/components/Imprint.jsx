import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const Imprint = () => {
  const imprintData = [
    {
      title: 'information in accordance with section 5 TMG:',
      content: (
        <em>
          lili avar <br /> ottokarstr.12 <br /> 12105 berlin <br />{' '}
          <a href="mailto:lili@avar.online">lili@avar.online</a>,
        </em>
      ),
    },
    {
      title: 'copyright:',
      content: (
        <em>
          the contents and works created by the site operators on these pages
          are subject to german copyright law. the duplication, processing,
          distribution, and any kind of exploitation outside the limits of
          copyright law require the written consent of the respective author or
          creator. downloads and copies of this site are only permitted for
          private, non-commercial use. Insofar as the content on this site was
          not created by the operator, the copyrights of third parties are
          observed. in particular, third-party content is marked as such.should
          you nevertheless become aware of a copyright infringement, we ask you
          to notify us accordingly. if we become aware of any infringements, we
          will remove such contents immediately.
        </em>
      ),
    },
    {
      title: 'liability for links',
      content: (
        <em>
          our offer contains links to external websites of third parties, over
          whose content we have no influence. therefore, we cannot assume any
          liability for these external contents. the respective provider or
          operator of the sites is always responsible for the content of the
          linked sites. the linked pages were checked for possible legal
          violations at the time of linking. illegal contents were not
          recognizable at the time of linking. however, a permanent control of
          the contents of the linked pages is not reasonable without concrete
          evidence of a violation of the law. if we become aware of any
          infringements, we will remove such links immediately.
        </em>
      ),
    },
    {
      title: 'liability for content',
      content: (
        <em>
          as a service provider, we are responsible for our own content on these
          pages in accordance with § 7 para.1 TMG and general laws. However,
          according to §§ 8 to 10 TMG, we are not obligated as a service
          provider to monitor transmitted or stored third-party information or
          to investigate circumstances that indicate illegal activity.
          Obligations to remove or block the use of information in accordance
          with general laws remain unaffected by this. However, liability in
          this respect is only possible from the time of knowledge of a concrete
          infringement. If we become aware of any such legal infringements, we
          will remove the content in question immediately. Liability for Links
          Our offer contains links to external websites of third parties, over
          whose content we have no influence. therefore, we cannot assume any
          liability for these external contents. The respective provider or
          operator of the sites is always responsible for the content of the
          linked sites. The linked pages were checked for possible legal
          violations at the time of linking. Illegal contents were not
          recognizable at the time of linking. However, a permanent control of
          the contents of the linked pages is not reasonable without concrete
          evidence of a violation of the law. If we become aware of any
          infringements, we will remove such links immediately. Copyright The
          contents and works created by the site operators on these pages are
          subject to German copyright law. The duplication, processing,
          distribution, and any kind of exploitation outside the limits of
          copyright law require the written consent of the respective author or
          creator. Downloads and copies of this site are only permitted for
          private, non-commercial use. Insofar as the content on this site was
          not created by the operator, the copyrights of third parties are
          observed. In particular, third-party content is marked as such. Should
          you nevertheless become aware of a copyright infringement, we ask you
          to notify us accordingly. If we become aware of any infringements, we
          will remove such contents immediately.
        </em>
      ),
    },
    {
      title: 'fonts',
      content: <em>impactLabel, iawrtier, courier</em>,
    },
  ];

  return (
    <div className="w-full h-full flex justify-center relative">
      <NavLink to="/" className="absolute top-1 right-4 font-bold z-10">
        x
      </NavLink>
      <div className="w-full overflow-y-auto grid grid-cols-2 gap-2 text-xs">
        {imprintData.map((section, index) => (
          <Fragment key={index}>
            <blockquote
              className="component-container"
              style={{
                backgroundColor: 'var(--bg-blur)',
              }}
            >
              <strong>{section.title}</strong>
            </blockquote>

            <blockquote
              style={{
                backgroundColor: 'var(--bg-blur)',
              }}
              className="component-container col-start-2"
            >
              {section.content}
            </blockquote>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Imprint;
