/* <script> */
  // let newNode = document.createElement('div');
  // newNode.innerHTML = '<p>New Node</p>'; // <div><p>New Node</p></div>
  // newNode.classList.add('newclass');
  // let selectNode = document.querySelector('.p-bloc--faq');
  // // selectNode.appendChild(newNode);

  // let referenceNode = document.querySelectorAll('.p-faqlist')[0];
  // selectNode.insertBefore(newNode, referenceNode);

  // document.querySelector('.newclass').remove();

//   let faq = document.querySelectorAll('.p-faqlist');
//   for(let i = 0; i < faq.length; i++ ) {
//     faq[i].addEventListener('click', function(e) {
//       e.preventDefault();
//       faq[i].classList.toggle('show');
//     });
//   }
// </script>

// let newNode = document.createElement('div');
// newNode.innerHTML = '<p>New Node</p>';
// newNode.classList.add('newclass');
// let selectNode = document.querySelector('.faq__txt');
//         selectNode.appendChild(newNode);

//         let referenceNode = document.querySelectorAll('.faq__title')[0];
//         selectNode.insertBefore('newNode','referenceNode');
let faq = document.querySelectorAll('.faq');

for(let x=0; x<faq.length; x++) { 
    faq[x].addEventListener('click', function(q) {
        faq[x].classList.toggle('show');
// console.log(faq[x]);
    });
}
