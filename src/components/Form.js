import React from 'react';

const Form = () => {
    return (
        <div class="mx-auto p-5 bg-success" style={{width: "500px"}}>
      <form>
        <div class="mb-3">
          <label for="personalData" class="form-label">NPM</label>
          <input type="number" class="form-control" id="npm" aria-describedby="npm" required/>
        </div>
        <div class="mb-3">
          <label for="personalData" class="form-label">First Name</label>
          <input type="text" class="form-control" id="firstName" aria-describedby="firstName" required/>
        </div>
        <div class="mb-3">
          <label for="personalData" class="form-label">Middle Name</label>
          <input type="text" class="form-control" id="middleName" aria-describedby="middleName"/>
        </div>
        <div class="mb-3">
          <label for="personalData" class="form-label">Last Name</label>
          <input type="text" class="form-control" id="lastName" aria-describedby="lastName" required/>
        </div>
        <div class="mb-3">
          <label for="personalData" class="form-label">Birthdate</label>
          <input type="date" class="form-control" id="birthdate" aria-describedby="birthdate" required/>
        </div>
        </form>
</div>
    );
}


export default Form;
