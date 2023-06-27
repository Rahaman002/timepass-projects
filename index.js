document.addEventListener('DOMContentLoaded',function(){
  let items=document.querySelector('#items');
      async function fetching_data()
      {
        const data= await fetch("https://api.escuelajs.co/api/v1/products");
        const products = await data.json();
        for(var i=0;i<products.length;i++)
        {
          let temp=`<div class="product" id=${products[i].id}>
                          <img src="${products[i].category.image}" />
                          <h1 class="title">${products[i].title}</h1>
                          <p class="description">${products[i].description}</p>
                    </div>`
          items.innerHTML+=temp;
        }
        document.querySelector('.product').addEventListener('click',(e)=>{
          console.log(e.target.id);
        },false)
      }
      fetching_data();
})
// 
// let temp=
// async function fetchData(len) {
//     try {
      
//     } catch (error) {
//       console.log("Error:", error);
//     }
//     len()
//   }
  
//   ss=fetchData(()=>{
//     con;
//   });

  