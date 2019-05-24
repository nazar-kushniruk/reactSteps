1. CREATE ROOTCOMPONENT  state{
2.    ```js
      1.    this.state = {
            1.    step1: '',
            2.    step2: '',
            3.    stea3: '',
            4.    cerrentStep: 0
      2.    }

         methood: setCurrentStep({curentStep, valueForStep}){
           if(curentStep == 1){
             this.setState({step1: valueForStep})
           } и так дале

         } - повешаеться на кнопку next or back

          shouldComponentUpdate -> Для конторля состояний так как это верхний компонет
              который перерисовывает весь Арр то нужен жосткий контроль каждой перерисовки

         return <ChildComponent setCurrentStep={setCurrentStep} {...this.state} />
3.    ```
4. }