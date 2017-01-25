import React from 'react';

function CreateUser (){
  return (
    <div>
      <h1>Create New User</h1>
      <div>
        User Name: <input type="text"/>
      </div>
      <div>
        Password: <input type="text"/>
      </div>
      <div>
        <button>Create User</button>
      </div>
    </div>
  );
}

export default CreateUser;
