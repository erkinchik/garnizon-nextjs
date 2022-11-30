import React from "react";

import classes from "./FeedFormSection.module.scss";

import { Input } from "components/shared";

const FeedFormSection = () => {
  return (
    // <section className={classes.feedFormWrapper}>
    //   <div className={classes.container}>
    //     <div className={classes.feedFormBlock}>
    //       <div className={classes.feedFormBlockCol}>
    //         <h5 className={classes.feedModalTitle}>Эксперт на связи</h5>
    //         <h6 className={classes.feedModalSubtitle}>
    //           Подберет решение и ответит на все вопросы
    //         </h6>
    //         <form
    //           action="/universal_form/lead_form/"
    //           className={classes.feedForm}
    //         >
    //           <div className={classes.feedFormGroup}>
    //             <Input
    //               className={classes.feedFormControl}
    //               name="name"
    //               placeholder="Имя"
    //               type="text"
    //             />
    //           </div>
    //           <div className={classes.feedFormGroup}>
    //             <Input
    //               className={classes.feedFormControl}
    //               name="phone"
    //               placeholder="Телефон"
    //               type="tel"
    //             />
    //           </div>
    //           <button className={classes.btn} disabled={true} type="submit">
    //             Отправить
    //           </button>
    //         </form>
    //         <small className={classes.feedFormConditions}>
    //           {`Нажимая "Отправить", вы принимаете `}
    //           <a href="#" target="_blank">
    //             Условия обработки персональных данных
    //           </a>
    //         </small>
    //       </div>
    //       <div className={classes.feedFormBlockMan} />
    //     </div>
    //   </div>
    // </section>
      <form>
      <div className={classes.background}>
          <div style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center",}}>
        <div style={{ margin:'50px 0 0'}} >
        <h1 style={{color: '#FFFFFF', fontSize:'200%'}}>Эксперт на связи</h1>
            <h3 style={{color: '#FFFFFF', margin:'30px 0'}}>Подберет решение и ответит на все вопросы</h3>
            <div style={{display:"flex", flexDirection:"column", gap:20}}>
            <input className={classes.input} type="text" placeholder='Имя'/>
            <input className={classes.input} type="text" placeholder='Телефон'/>
            </div>
        </div>
          <div style={{margin:30, position:"relative", right:30}}>
              <p style={{color: '#FFFFFF', opacity:0.5, }}>
                  Нажимая "Отправить", вы принимаете <br/>
                  Условия обработки персональных данных
              </p>
          </div>
              <button type="submit" className={classes.bth}>Отправить</button>

          </div>
      </div>
      </form>
  );
};

export default FeedFormSection;
