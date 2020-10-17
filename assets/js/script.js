// card container
function tileArea(){
    let skillsDiv = `<div class="tile is-vertical is-8>
                        <div class="tile"> 
                            <div class=" tile is-parent is-vertical">
                                <article class="tile is-child notification is-primary">
                                    <div class="columns">
                                        <div class="column" id="card-container"></div>
                                    </div> 
                                </article                       
                            </div>    
                        </div>
                    </div>`;

        let tileArea = $('#show-tile');
        tileArea.html(skillsDiv);
}
tileArea();
function dynamicCard(){
   let skillCard = `
                    <div class="card">
                        <div class="content">
                            <p class="title"> Front End  and Backend Web Development
                            <ul class="skill-set">
                            <li> Design and Development of Front end Applications</li>
                           <li> 
                            </p><hr>
                            
                            </ul>
                        </div>
                    </div>
                    
                           `;

        let displaySkills = $('#card-container').html(skillCard);
        
}
dynamicCard();


