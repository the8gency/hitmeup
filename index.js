

(() => {
  const app = {
    initialize () {
      console.log('1. Application started!');
      this.cacheElements();
      // this.fetchData();
      this.buildUI();
    },
    cacheElements () {
      console.log('2. cache all existing DOM elements!');
      this.$servicesList = document.querySelector('#servicesList');
      
    },
    async buildUI () {
      console.log('3. Build the user interface!');
      if (document.querySelector('#servicesList') !== null) {
        this.$servicesList.innerHTML = await this.generateHTMLForServicesList();
      } 
    },
    async fetchData () {
      const response = await fetch('./data/services.json');
      const data =  await response.json();
      return data;
    },
    async generateHTMLForServicesList () {

      const services =  await this.fetchData();
      let tempStr = '';
      services.map((item) => {
        tempStr += `
        <li>
          <img src="./images/placeholder.jpeg" alt="placeholder img"/>
          <img src="./images/call.svg" class="call" alt="call action icon">
          <div class="item-detail">
            <div>
              <img src="./images/passport.svg" alt="name icon">
              <p>${item.name}</p>
            </div>
            <div>
              <img src="./images/successrate.svg" alt="success rate icon">
              <p>${item.successrate} % success</p>
            </div>
            <div>
              <img src="./images/price.svg" alt="price icon">
              <p>$ ${item.price}</p>
            </div>
            <div>
              <img src="./images/kill.svg" alt="kill icon">
              <p>${item.kills} kills</p>
            </div>
            <div>
              <img src="./images/police.svg" alt="police kills icon">
              <p>${item.policeKills} police kills</p>
            </div>
          </div>
        </li>
        `;
      }).join('');
      return tempStr;
    }
  };
  app.initialize();
})();