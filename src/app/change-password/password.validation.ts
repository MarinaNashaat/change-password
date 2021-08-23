import { ValidationErrors, AbstractControl, FormGroup, ValidatorFn, FormControl } from '@angular/forms';

export class passwordValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { cannotContainSpace: true };
    }
    return null;
  }
  static wrongPassword(control: AbstractControl):Promise<ValidationErrors|null>{
    let regex=/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,32}/;
    return new Promise((resolve)=>{
      setTimeout(()=>{
        if(!regex.test(control.value)){
          resolve({wrongPassword:true});
        }
        else{
          resolve(null);
        }
      },2000)
    })

  }
  static shouldMatch(control: AbstractControl): ValidationErrors | null {
    let newOne= control.get('newPassword') as FormControl;
    let newCon= control.get('confirmPassword') as FormControl;
    let newPass = newOne.value;
    let confirmPass =newCon.value;
    return newPass===confirmPass? null: { shouldMatch: true };



  }


}
