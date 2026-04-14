'use client';

export default function Where() {
  return (
    <section>
      <h3>Where</h3>
      <ul className={'flex gap-4'}>
        <li>
          <a href={'sms:+17202319248'} title={'SMS'}>
            📞
          </a>
        </li>
        <li>
          <a href={'mailto:killian@killiangrant.com'} title={'Email'}>
            📧
          </a>
        </li>
        <li>
          <a href={'https://linkedin.com/in/killianlgrant'} target={'_blank'} title={'LinkedIn'}>
            👔
          </a>
        </li>
        <li>
          <a href={'https://github.com/nailliK'} target={'_blank'} title={'Github'}>
            🐙
          </a>
        </li>
        <li>
          <a href={'https://secrethandshake.io'} target={'_blank'} title={'Secret Handshake'}>
            🤝
          </a>
        </li>
        <li>
          <a
            href={
              'https://github.com/nailliK/resumes/releases/download/2026-03-21/KillianLouisGrant-QualificationsSummary-GeneralistProfile.pdf'
            }
            title={'Résumé'}
            download
          >
            📄
          </a>
        </li>
      </ul>
    </section>
  );
}
