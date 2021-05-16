
const artists = 
[
    {"name":"https://twitch.tv/ShintaLovesHouseMusic.png", "img":"ShintaLovesHouseMusic.png"},
    {"name":"https://twitch.tv/djfadibali.png", "img":"djfadibali.png"},
	{"name":"https://twitch.tv/asotshMusic.png", "img":"asotshMusic.png"},
	{"name":"https://twitch.tv/BacardiBlom.png", "img":"BacardiBlom.png"},
	{"name":"https://twitch.tv/bobbyb73.png", "img":"bobbyb73.png"},
	{"name":"https://twitch.tv/BOMBTRAXX.png", "img":"BOMBTRAXX.png"},
	{"name":"https://twitch.tv/Bored_Ravers.png", "img":"Bored_Ravers.png"},
	{"name":"https://twitch.tv/Buyzen.png", "img":"Buyzen.png"},
	{"name":"https://twitch.tv/camerondare.png", "img":"camerondare.png"},
	{"name":"https://twitch.tv/coffeeandtrance.png", "img":"coffeeandtrance.png"},
	{"name":"https://twitch.tv/Cosmic_Frequencies.png", "img":"Cosmic_Frequencies.png"},
	{"name":"https://twitch.tv/D4bblz.png", "img":"D4bblz.png"},
	{"name":"https://twitch.tv/DjBinauralBeats.png", "img":"DjBinauralBeats.png"},
	{"name":"https://twitch.tv/DJchopper.png", "img":"DJchopper.png"},
	{"name":"https://twitch.tv/DjChrisCraze.png", "img":"DjChrisCraze.png"},
	{"name":"https://twitch.tv/DJKennyKay.png", "img":"DJKennyKay.png"},
	{"name":"https://twitch.tv/DJKyzerSosa.png", "img":"DJKyzerSosa.png"},
	{"name":"https://twitch.tv/DJLoop.png", "img":"DJLoop.png"},
	{"name":"https://twitch.tv/DJNoahJuan.png", "img":"DJNoahJuan.png"},
	{"name":"https://twitch.tv/DJScottandReneeB.png", "img":"DJScottandReneeB.png"},
	{"name":"https://twitch.tv/djshotgunwound.png", "img":"djshotgunwound.png"},
	{"name":"https://twitch.tv/DJ_Octurian.png", "img":"DJ_Octurian.png"},
	{"name":"https://twitch.tv/DJ_SOLibrah.png", "img":"DJ_SOLibrah.png"},
	{"name":"https://twitch.tv/eis_thiele.png", "img":"eis_thiele.png"},
	{"name":"https://twitch.tv/EQUIX_DJ.png", "img":"EQUIX_DJ.png"},
	{"name":"https://twitch.tv/ExLibrisDJ.png", "img":"ExLibrisDJ.png"},
	{"name":"https://twitch.tv/GaetanoZaccone.png", "img":"GaetanoZaccone.png"},
	{"name":"https://twitch.tv/JasonJansari.png", "img":"JasonJansari.png"},
	{"name":"https://twitch.tv/LilyPita.png", "img":"LilyPita.png"},
	{"name":"https://twitch.tv/LizzieCurious.png", "img":"LizzieCurious.png"},
	{"name":"https://twitch.tv/MamaDre69.png", "img":"MamaDre69.png"},
	{"name":"https://twitch.tv/Meerkat452.png", "img":"Meerkat452.png"},
	{"name":"https://twitch.tv/MixedbyXeloX.png", "img":"MixedbyXeloX.png"},
	{"name":"https://twitch.tv/NickLewisMusic.png", "img":"NickLewisMusic.png"},
	{"name":"https://twitch.tv/NirmanaOfficial.png", "img":"NirmanaOfficial.png"},
	{"name":"https://twitch.tv/PakkaMusic.png", "img":"PakkaMusic.png"},
	{"name":"https://twitch.tv/PartyCatLive.png", "img":"PartyCatLive.png"},
	{"name":"https://twitch.tv/phat_khant.png", "img":"phat_khant.png"},
	{"name":"https://twitch.tv/RMusicNL.png", "img":"RMusicNL.png"},
	{"name":"https://twitch.tv/SimonMDj.png", "img":"SimonMDj.png"},
	{"name":"https://twitch.tv/simon_felix.png", "img":"simon_felix.png"},
	{"name":"https://twitch.tv/StretchMusicUK.png", "img":"StretchMusicUK.png"},
	{"name":"https://twitch.tv/S_Dee.png", "img":"S_Dee.png"},
	{"name":"https://twitch.tv/tai_chiller.png", "img":"tai_chiller.png"},
	{"name":"https://twitch.tv/tantra_thursdays.png", "img":"tantra_thursdays.png"},
	{"name":"https://twitch.tv/TCHAKAOFICIAL.png", "img":"TCHAKAOFICIAL.png"},
	{"name":"https://twitch.tv/TheDJMajesty.png", "img":"TheDJMajesty.png"},
	{"name":"https://twitch.tv/Thom_Foolery.png", "img":"Thom_Foolery.png"},
	{"name":"https://twitch.tv/WillBensoneMusic.png", "img":"WillBensoneMusic.png"},
	{"name":"https://twitch.tv/YUSS_DJ.png", "img":"YUSS_DJ.png"},
]

setTimeout(onLoad, 200)
function onLoad() {
    loadArtists();
}

function loadArtists() {
    for (let i = 0; i < artists.length; i = i+2) {
        document.querySelector("#ArtistsContainer").appendChild(makeArtist(artists[i],artists[i+1], i));
    }
}

function makeArtist(artist1, artist2) {
    let div = document.createElement("div");
    div.setAttribute("class", "ArtistsPerTwo");
    let el = document.createElement("a");
    el.setAttribute("href", artist1.name);
    let temp = document.createElement("img");
    temp.setAttribute("class", "Artist");
    temp.setAttribute("src", "./artists/" + artist1.img);
    el.appendChild(temp);
    div.appendChild(el);
    el = document.createElement("a");
    el.setAttribute("href", artist2.name);
    temp = document.createElement("img");
    temp.setAttribute("class", "Artist");
    temp.setAttribute("src", "./artists/" + artist2.img);
    el.appendChild(temp);
    div.appendChild(el);
    return div;
}

{/* <div id="ArtistsContainer">
                    <div id="Artist">
                        <img src="./artists/VFTT_BacardiBlom.png">
                        <p>BacardiBlom</p>
                    </div>
                </div> */}