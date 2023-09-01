const loadPHTube = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`)
    const data = await res.json()
    const phTube = data.data;
    displayPhTube(phTube);
}

const displayPhTube = (tabButton) => {
    const tabBtn = document.getElementById('tab-btn');

    tabButton?.slice(0,4).forEach(btn => {
        const tabDiv = document.createElement('div');
        tabDiv.classList.add('my-3')
        tabDiv.innerHTML = `
        <button onclick="handleLoadBtn('${btn.category_id}')" class="btn btn-sm md:btn-md lg:btn-md btn-gray mx-2"><a class="tab">${btn.category}</a></button>
        `;
        tabBtn.appendChild(tabDiv)
    })
}

const handleLoadBtn = async (id) => {

    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data = await res.json()
    const tubeCategories = data.data;

    const tubeCategoryCardContainer = document.getElementById('tube-category-card-container')
    tubeCategoryCardContainer.innerHTML = '';

    if(tubeCategories.length === 0){
        const dataNotFound = document.createElement('div');
        tubeCategoryCardContainer.classList.remove('grid')
        dataNotFound.innerHTML = `
            <div class="w-52 mx-auto my-32">
                <div class="flex justify-center" >
                    <img class="w-24" src="image/icon.png"/>
                </div>
                <p class="text-center font-bold my-4">Oops!! Sorry, There is no <br/> content here</p>
            </div>
        `;
        tubeCategoryCardContainer.appendChild(dataNotFound);
    }else{
        tubeCategoryCardContainer.classList.add('grid')
    }
    

    tubeCategories.forEach(tubeCategory => {
       const tubeCategoryDiv = document.createElement('div');
       tubeCategoryDiv.classList = 'card w-80 bg-gray-200 shadow-xl mx-auto'
       tubeCategoryDiv.innerHTML = `
       
        <figure class="h-40">
        <img
            src="${tubeCategory.thumbnail}"
            alt="Shoes"
        />
        </figure>
        <div class="flex items-center px-4 py-6">
            <img class="w-10 rounded-full mb-5" src="${tubeCategory.authors[0].profile_picture}"/>
            <div class="ml-2">
                <h5 class="font-semibold my-1">${tubeCategory.title}</h5>
                <p class="text-sm">${tubeCategory.authors[0].profile_name}<span class="ml-2">${tubeCategory.authors[0].verified}</span></p>
                <p class="mt-[-3px]"><small>${tubeCategory.others.views} views</small></p>
            </div>
        </div>
       `;
       tubeCategoryCardContainer.appendChild(tubeCategoryDiv)
    })
} 

handleLoadBtn(1000)
loadPHTube()