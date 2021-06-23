
const artists = 
[
    {"name":"https://twitch.tv/ShintaLovesHouseMusic", "img":"ShintaLovesHouseMusic.png"},
    {"name":"https://twitch.tv/djfadibali", "img":"djfadibali.png"},
	{"name":"https://twitch.tv/asotshMusic", "img":"asotshMusic.png"},
	{"name":"https://twitch.tv/BacardiBlom", "img":"BacardiBlom.png"},
	{"name":"https://twitch.tv/bobbyb73", "img":"bobbyb73.png"},
	{"name":"https://twitch.tv/BOMBTRAXX", "img":"BOMBTRAXX.png"},
	{"name":"https://twitch.tv/Bored_Ravers", "img":"Bored_Ravers.png"},
	{"name":"https://twitch.tv/Buyzen", "img":"Buyzen.png"},
	{"name":"https://twitch.tv/camerondare", "img":"camerondare.png"},
	{"name":"https://twitch.tv/coffeeandtrance", "img":"coffeeandtrance.png"},
	{"name":"https://twitch.tv/Cosmic_Frequencies", "img":"Cosmic_Frequencies.png"},
	{"name":"https://twitch.tv/D4bblz", "img":"D4bblz.png"},
	{"name":"https://twitch.tv/DjBinauralBeats", "img":"DjBinauralBeats.png"},
	{"name":"https://twitch.tv/DJchopper", "img":"DJchopper.png"},
	{"name":"https://twitch.tv/DjChrisCraze", "img":"DjChrisCraze.png"},
	{"name":"https://twitch.tv/DJKennyKay", "img":"DJKennyKay.png"},
	{"name":"https://twitch.tv/DJKyzerSosa", "img":"DJKyzerSosa.png"},
	{"name":"https://twitch.tv/DJLoop", "img":"DJLoop.png"},
	{"name":"https://twitch.tv/DJNoahJuan", "img":"DJNoahJuan.png"},
	{"name":"https://twitch.tv/DJScottandReneeB", "img":"DJScottandReneeB.png"},
	{"name":"https://twitch.tv/djshotgunwound", "img":"djshotgunwound.png"},
	{"name":"https://twitch.tv/DJ_Octurian", "img":"DJ_Octurian.png"},
	{"name":"https://twitch.tv/DJ_SOLibrah", "img":"DJ_SOLibrah.png"},
	{"name":"https://twitch.tv/eis_thiele", "img":"eis_thiele.png"},
	{"name":"https://twitch.tv/EQUIX_DJ", "img":"EQUIX_DJ.png"},
	{"name":"https://twitch.tv/ExLibrisDJ", "img":"ExLibrisDJ.png"},
	{"name":"https://twitch.tv/GaetanoZaccone", "img":"GaetanoZaccone.png"},
	{"name":"https://twitch.tv/JasonJansari", "img":"JasonJansari.png"},
	{"name":"https://twitch.tv/LilyPita", "img":"LilyPita.png"},
	{"name":"https://twitch.tv/LizzieCurious", "img":"LizzieCurious.png"},
	{"name":"https://twitch.tv/MamaDre69", "img":"MamaDre69.png"},
	{"name":"https://twitch.tv/Meerkat452", "img":"Meerkat452.png"},
	{"name":"https://twitch.tv/MixedbyXeloX", "img":"MixedbyXeloX.png"},
	{"name":"https://twitch.tv/NickLewisMusic", "img":"NickLewisMusic.png"},
	{"name":"https://twitch.tv/NirmanaOfficial", "img":"NirmanaOfficial.png"},
	{"name":"https://twitch.tv/PakkaMusic", "img":"PakkaMusic.png"},
	{"name":"https://twitch.tv/PartyCatLive", "img":"PartyCatLive.png"},
	{"name":"https://twitch.tv/phat_khant", "img":"phat_khant.png"},
	{"name":"https://twitch.tv/RMusicNL", "img":"RMusicNL.png"},
	{"name":"https://twitch.tv/SimonMDj", "img":"SimonMDj.png"},
	{"name":"https://twitch.tv/simon_felix", "img":"simon_felix.png"},
	{"name":"https://twitch.tv/StretchMusicUK", "img":"StretchMusicUK.png"},
	{"name":"https://twitch.tv/S_Dee", "img":"S_Dee.png"},
	{"name":"https://twitch.tv/tai_chiller", "img":"tai_chiller.png"},
	{"name":"https://twitch.tv/tantra_thursdays", "img":"tantra_thursdays.png"},
	{"name":"https://twitch.tv/TCHAKAOFICIAL", "img":"TCHAKAOFICIAL.png"},
	{"name":"https://twitch.tv/TheDJMajesty", "img":"TheDJMajesty.png"},
	{"name":"https://twitch.tv/Thom_Foolery", "img":"Thom_Foolery.png"},
	{"name":"https://twitch.tv/WillBensoneMusic", "img":"WillBensoneMusic.png"},
	{"name":"https://twitch.tv/YUSS_DJ", "img":"YUSS_DJ.png"},
]

setTimeout(onLoad, 200)
function onLoad() {
    loadArtists();
}

function loadArtists() {
    for (let i = 0; i < 10; i = i+2) {
        document.querySelector("#ArtistsContainer").appendChild(makeArtist(artists[i],artists[i+1]));
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

var index = 0;

function goRight() {
	index += 2;
	first = (index - 2) % artists.length;
	second = (index - 1) % artists.length;
	document.querySelector("#ArtistsContainer").appendChild(makeArtist(artists[first],artists[second]),document.querySelector("#ArtistsContainer").firstChild);
	document.querySelector("#ArtistsContainer").removeChild(document.querySelector("#ArtistsContainer").lastChild);


	document.querySelector("#ArtistsContainer").removeChild(document.querySelector("#ArtistsContainer").firstChild);
	document.querySelector("#ArtistsContainer").removeChild(document.querySelector("#ArtistsContainer").firstChild);
	document.querySelector("#ArtistsContainer").appendChild(makeArtist(artists[first],artists[second]));
}

function goLeft() {
	index -= 2;
	first = (index - 2) % artists.length;
	second = (index - 1) % artists.length;
	document.querySelector("#ArtistsContainer").insertBefore(makeArtist(artists[first],artists[second]),document.querySelector("#ArtistsContainer").firstChild);
	document.querySelector("#ArtistsContainer").removeChild(document.querySelector("#ArtistsContainer").lastChild);
	
}