import Image from "next/image";

export default function Employee({ styles, employee }){
  const profileImage = require(`../../public/employees/${ employee.image_path }`);
  // const imageSizes = '100px';

  return(
    <article className={ [styles.employee, employee.priority_role ? styles.prioityEmployee : ''].join(' ') }>

      <div className={ [styles.employeeBanner, styles.seperateCard].join(' ') }>
        <div className={ styles.profile }>
          <div className={ styles.imageContainer }>
            <Image src={ profileImage } fill alt={ employee.name } />
          </div>
          <div className={ styles.name }>
            <h2>{ employee.name }</h2>
            <h3>{ employee.title }</h3>
          </div>
        </div>

        <div className={ styles.info }>
          <div className={ styles.hello } >
            <h3>Hello,</h3>
            <h4>A bit about me: </h4>
          </div>
          <div className={ styles.sectionsSelectors }>
            <a href={ `#${employee.name.split(' ').join('')}-certifications` } className={ styles.selector }>Certifications</a>
            <a href={ `#${employee.name.split(' ').join('')}-education` } className={ styles.selector }>Education</a>
            <a href={ `#${employee.name.split(' ').join('')}-achivements` } className={ styles.selector }>Achivements</a>
          </div>
        </div>

        <div className={ styles.bio}>
          <p>{ employee.bio }</p>
        </div>
      </div>

      <div 
        className={ [styles.certifications, styles.qualifications, styles.seperateCard].join(' ') }
        id={ `${employee.name.split(' ').join('')}-certifications` }
        >
        <h4>Certifications and Training</h4>
        <ul>
          {
            employee.certifications.map((certification, i) => (
              <li key={`employee-${ employee.name }-certification-${i}`}>{ certification }</li> 
            ))
          }
        </ul>
      </div>

      <div 
        className={ [styles.education, styles.qualifications, styles.seperateCard].join(' ') } 
        id={ `${employee.name.split(' ').join('')}-education` }
      >
        <h4>Education</h4>
        {
          employee.education.map((degree, i) => (
            <div 
              key={`employee-${ employee.name }-degree-${i}`} 
              className={ styles.degree } 
            >
              <h5>
                { degree.factuly ? degree.factuly + ', ' : ''  }
                { degree.school }, { degree.city } { degree.province }
              </h5>
              <p>
                { degree.degree_title }, { degree.designation }
              </p>
              <p>{ degree.grad_year }</p>
            </div>
          ))
        }
      </div>

      <div 
        className={ [styles.achiements, styles.qualifications, styles.seperateCard].join(' ') }
        id={ `${employee.name.split(' ').join('')}-achivements` }
      >
        <h4>Achivements</h4>
        {
          employee.achivements.map((achiement, i) => (
            <div 
            key={`employee-${ employee.name }-achievment-${i}`}
            className={ styles.achiement }>
              <h5>{ achiement.title }</h5>
              <p>{ achiement.subtitle }</p>
            </div>
          ))
        }
      </div>
    </article>
  );
}