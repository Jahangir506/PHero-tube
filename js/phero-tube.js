let tubeCategories = []

const loadPHTube = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`)
    const data = await res.json()
    const phTube = data.data;

    const tabBtn = document.getElementById('tab-btn');

    phTube?.slice(0,4).forEach(btn => {

        const tabDiv = document.createElement('div');
        tabDiv.classList.add('my-3')
        tabDiv.innerHTML = `
        <button id="active-btn-color" onclick="displayLoadCategory('${btn.category_id}')" class="btn btn-sm md:btn-md lg:btn-md btn-gray hover:bg-[#FF1F3D] mx-2"><a class="tab">${btn.category}</a></button>
        `;
        tabBtn.appendChild(tabDiv)
    })
}

 const displayLoadCategory = async (categoriesId = '1000') => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoriesId}`)
    const data = await res.json()
    tubeCategories = data.data;
    tubeCategories.sort((a, b) => parseInt(a.others.views) - parseInt(b.others.views))
    displayShowNews()
 }

const displayShowNews = () => {
    const categoryNewsContainer = document.getElementById('category-news-container')
    categoryNewsContainer.innerHTML = '';

    if(tubeCategories.length === 0){
        const dataNotFound = document.createElement('div');
        categoryNewsContainer.classList.remove('grid')
        dataNotFound.innerHTML = `
            <div class="w-80 mx-auto my-32">
                <div class="flex justify-center" >
                    <img class="w-28" src="image/icon.png"/>
                </div>
                <p class="text-center font-extrabold text-xl my-4">Oops!! Sorry, There is no <br/> content here</p>
            </div>
        `;
        categoryNewsContainer.appendChild(dataNotFound);
    }else{
        categoryNewsContainer.classList.add('grid')
    }
    
    tubeCategories.forEach(tubeCategory => {
        
        const secondT = parseInt(tubeCategory?.others.posted_date);
        const hours = Math.floor(secondT / 3600)
        const remainingMinutes  = Math.floor((secondT % 3600) / 60);

        const totalTime = secondT?`${hours}hrs ${remainingMinutes} min ago`: '';

       const tubeCategoryDiv = document.createElement('div');
       tubeCategoryDiv.classList = 'card w-80 mx-auto'

       tubeCategoryDiv.innerHTML = `
       
        <figure class="h-40 relative">
        <img
            src="${tubeCategory.thumbnail}"
            alt="Shoes"
        />
        <p class="absolute bottom-0 right-6 text-white mb-3  bg-black rounded w-28 text-center text-xs">${totalTime}</p>
        </figure>
        <div class="flex items-center px-4 py-6">
            <div class="avatar mb-4">
                <div class="w-10 rounded-full">
                    <img src="${tubeCategory.authors[0].profile_picture}"/>
                </div>
            </div>
            <div class="ml-3">
                <div>
                    <h5 class="font-semibold my-1">${tubeCategory.title}</h5>
                <div class="flex items-center">
                    <p class="text-sm">${tubeCategory.authors[0].profile_name}<span class="ml-2"></span></p>
                    <p>${tubeCategory.authors[0].verified === true ? '<img class="w-4" src="image/check.png"/>' : '' }</p>
                </div>
                </div>
                <p class="mt-[-3px]"><small>${tubeCategory.others.views} views</small></p>
            </div>
        </div>
       `;
       categoryNewsContainer.appendChild(tubeCategoryDiv);
    })
} 

const sortViews = () => {

    tubeCategories.sort((a, b) => parseInt(b.others.views) - parseInt(a.others.views))
    displayShowNews()
}

const sortBtn = document.getElementById('sort-btn');
sortBtn.addEventListener('click', () => {
    sortViews()
})
  
displayLoadCategory()
loadPHTube()
