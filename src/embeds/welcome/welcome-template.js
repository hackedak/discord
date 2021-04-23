module.exports = (name)=>{
        return `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Pirata+One&display=swap" rel="stylesheet">
            <style>
                body {
                    font-family: 'Open Sans', sans-serif;
                    max-width: 600px;
                    font-size: 20px;
                    border-left: 5px solid blue;
                    border-top: 5px solid rgb(57, 42, 63);
                    border-bottom: 5px solid rgb(57, 42, 63);
                    border-right: 5px solid rgb(57, 42, 63);
                    max-height: 400px;
                    background: rgb(36, 34, 49);
                    color: rgb(233, 230, 224);
                    padding: 10px;
                }
        
        
        
                .welcome-embed {
                    display: grid;
                    grid-template-columns: 70% 30%;
                }
        
                .welcome-header {
                    font-family: 'Pirata One', cursive;
                    text-align: center;
                }
        
                .side-image {
                    width: 140px;
                    height: 300px;
                }
        
                .welcome-header {
                    margin-bottom: 5px;
                }
        
                .member-avatar {
                    text-align: center;
                }
        
                .member-avatar img {
                    border: 5px solid rgb(59, 41, 41);
                    padding: 20px;
                    border-radius: 50%;
                }
        
                .welcome-para {
                    font-size: 15px;
                }
            </style>
        </head>
        
        <body>
            <div class="welcome-embed">
                <div class="text-content">
                    <div class="welcome-header">
                        <h1>Welcome ${name}</h1>
                    </div>
                    <div class="member-avatar">
                        <img src="https://avatars.dicebear.com/4.5/api/avataaars/${name}.svg" width="100px" />
                    </div>
                    <div class="welcome-para">
                        <p>Welcome to Jolly Rogers...<br>
                            I'm Captain Hook.<br>
                            Please read the rules and regulations of this ship(server<nbr>&#8287;cough!)</p>
                    </div>
                </div>
        
                <div class="side-image">
                    <img src="https://i.imgur.com/JGmywaU.png" alt="captain-hook" width="160px" height="260px">
                </div>
            </div>
        </body>
        
        </html>`
}