import '../../styles/styles.css';
import '../../styles/bootstrap.css';
import '../../styles/modesta.css';

function Kore() {
  return (
    <div className="Kore">
        <div className="Home">
            <div class="fullscreen">
            <div class="background"></div>
                <section class="me">
                    <section class="center-object overlay">
                        <h1>Kore</h1><br>
                        </br>
                        <p class="ktext">Kore is a Vrchat/Discord.js interactive bot for Vrchat Clubs aimed at making the process of club work easier. so you can have more fun!</p>
                        <section class="buttons">
                            <a href="https://discord.com/oauth2/authorize?client_id=1102004963347017919&scope=bot&permissions=8" class="btn animation hover discord-dropshadow">Invite Kore</a>
                            <a href="https://github.com/MythicXGN/Kore" class="btn animation hover github-dropshadow">Kore's Github</a>
                        </section>
                    </section>
                </section>
            </div>
        </div>
    </div>
  );
}

export default Kore;