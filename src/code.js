  document.getElementById("showModelCode").addEventListener("click", function () {
    const codeContainer = document.querySelector(".code-container");
    const code = document.getElementById("code");
    codeContainer.style.display = "block";
    code.innerText = modelCode;
  });
  
  document.getElementById("showViewCode").addEventListener("click", function () {
    const codeContainer = document.querySelector(".code-container");
    const code = document.getElementById("code");
    codeContainer.style.display = "block";
    code.innerText = viewCode;
  });
  
  document.getElementById("showControllerCode").addEventListener("click", function () {
    const codeContainer = document.querySelector(".code-container");
    const code = document.getElementById("code");
    codeContainer.style.display = "block";
    code.innerText = controllerCode;
  });
  
  document.getElementById("closeCode").addEventListener("click", function () {
    const codeContainer = document.querySelector(".code-container");
    codeContainer.style.display = "none";
    const code = document.getElementById("code");
    code.innerText = "";
  });

  const modelCode = `// model.js
  Vamos mostrar o código que utilizamos na MODEL - M do modelo MVC

  Modelo (Modelo):
  > O Modelo representa os dados e a lógica de negócios da aplicação.

  > Ele é responsável por acessar, atualizar e gerenciar os dados subjacentes, 
  bem como implementar a lógica de negócios da aplicação.

  > O Modelo notifica a Visão sobre mudanças nos dados, permitindo que a interface 
  do usuário seja atualizada conforme necessário.
`;
  
  const viewCode = `// view.js
  Vamos mostrar o código que utilizamos na VIEW - C do modelo MVC
  
  Visão (Visualizar):
  > A Visão é responsável por apresentar os dados ao usuário e interagir com ele.

  > Ela exibe as informações do Modelo e, em alguns casos, permite que o usuário 
  interaja com esses dados.

  > A Visão é notificada pelo Modelo sobre alterações nos dados, garantindo que a
  interface do usuário seja atualizada de acordo.
`;
  
  const controllerCode = `// controller.js
  Vamos mostrar o código que utilizamos na CONTROLLER - C do modelo MVC

  Controlador (Controlador):
  > O Controlador atua como intermediário entre o Modelo e a Visão.
  
  > Ele recebe as entradas do usuário (por exemplo, cliques do mouse, teclas 
    pressionadas) e coordena as ações relacionadas.

  > Com base nessas entradas, o Controlador atualiza o Modelo e, por sua vez,
  a Visão.  
`;