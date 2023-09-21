const fs = require("fs")
const chalk = require("chalk")

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO config.js, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.  

// MENU COMPLETO
const menu = (prefix, pushname, numerodn, adivinhaa, NomeDoBot,  wame) => {

return `╭═══════════════════ ⪩
╰╮き⃟🌺𝐈𝐍𝐅𝐎🌺⃟ き
╭┤🌺⭆➤ ${NomeDoBot}
┃│🌺⭆➤ Nome: ${pushname}
┃│🌺⭆➤ Seu celular: ${adivinhaa}
┃│🌺⭆➤ Status:『 On-line 』
┃╰══ ⪨
╰╦══════════════════ ⪨
╭┤き⃟🌺𝐍𝐎𝐕𝐎𝐒 𝐌𝐄𝐍𝐔𝐒🌺⃟ き
┃│🌺⭆➤ ${prefix}Menulogos
┃│🌺⭆➤ ${prefix}Brincadeiras
┃│🌺⭆➤ ${prefix}Menuadms
┃│🌺⭆➤ ${prefix}menudono
┃│🌺⭆➤ ${prefix}menuloja
┃│🌺⭆➤ ${prefix}Alteradores
┃│🌺⭆➤ ${prefix}Menuprem
┃╰══ ⪨
╰╦══════════════════ ⪨
╭┤き⃟🌺𝐔𝐒𝐔𝐀́𝐑𝐈𝐎𝐒🌺⃟ き
┃│🌺⭆➤ ${prefix}Convite [Link]
┃│🌺⭆➤ ${prefix}Bug [Questione]
┃│🌺⭆➤ ${prefix}Sugestao [Fale]
┃│🌺⭆➤ ${prefix}Perfil
┃│🌺⭆➤ ${prefix}Admins
┃│🌺⭆➤ ${prefix}Saldo
┃╰══ ⪨
╰╦══════════════════ ⪨
╭┤き⃟🌺𝐏𝐄𝐒𝐐𝐔𝐈𝐒𝐀𝐒🌺⃟ き
┃│🌺⭆➤ ${prefix}Pesquisar [Texto]
┃│🌺⭆➤ ${prefix}Covidbr
┃│🌺⭆➤ ${prefix}Covidmundo
┃│🌺⭆➤ ${prefix}Memes
┃│🌺⭆➤ ${prefix}Gerargrupos
┃│🌺⭆➤ ${prefix}Google [Texto]
┃│🌺⭆➤ ${prefix}Filme [Nome]
┃│🌺⭆➤ ${prefix}Gruposwhats [Texto]
┃│🌺⭆➤ ${prefix}Tradutor [Palavra]
┃│🌺⭆➤ ${prefix}Mercadolivre [Texto]
┃│🌺⭆➤ ${prefix}Americanas [Texto]
┃│🌺⭆➤ ${prefix}Submarino [Texto]
┃│🌺⭆➤ ${prefix}Amazon [Texto]
┃│🌺⭆➤ ${prefix}Signo [Signo]
┃│🌺⭆➤ ${prefix}Horoscopo [Signo]
┃│🌺⭆➤ ${prefix}Live [Nome]
┃│🌺⭆➤ ${prefix}Uptodown [Nome]
┃│🌺⭆➤ ${prefix}Screenshotweb [Link]
┃│🌺⭆➤ ${prefix}Happymod [Texto]
┃│🌺⭆➤ ${prefix}Playstore [Texto]
┃│🌺⭆➤ ${prefix}Celular [Nome] 
┃│🌺⭆➤ ${prefix}Clima [Nome da Cidade]
┃│🌺⭆➤ ${prefix}Clima2 [Nome da Cidade]
┃│🌺⭆➤ ${prefix}Lyrics [Nome] 
┃│🌺⭆➤ ${prefix}Lyrics2 [Nome] 
┃│🌺⭆➤ ${prefix}Gitclone [Link]
┃│🌺⭆➤ ${prefix}Gitstalker [Usuário]
┃│🌺⭆➤ ${prefix}iTunes [Música]
┃│🌺⭆➤ ${prefix}Ia [Oq você deseja]
┃│🌺⭆➤ ${prefix}Imagemaker [Texto]
┃│🌺⭆➤ ${prefix}Corrigir [Texto]
┃│🌺⭆➤ ${prefix}Animeia [Marque a img]
┃│🌺⭆➤ ${prefix}Chatgpt [Oq você deseja]
┃│🌺⭆➤ ${prefix}Docfake [Nome|5|apk]
┃╰══ ⪨
╰╦══════════════════ ⪨
╭┤き⃟🌺𝐍𝐎𝐓𝐈𝐂𝐈𝐀𝐒🌺⃟ き
┃│🌺⭆➤ ${prefix}Globo
┃│🌺⭆➤ ${prefix}Poder360
┃│🌺⭆➤ ${prefix}Jovempan
┃│🌺⭆➤ ${prefix}Uol
┃│🌺⭆➤ ${prefix}Cnnbrasil
┃│🌺⭆➤ ${prefix}Estadao
┃╰══ ⪨
╰╦══════════════════ ⪨
╭┤き⃟🌺𝐉𝐎𝐆𝐎𝐒🌺⃟ き
┃│🌺⭆➤ ${prefix}Akinator [Jogo]
┃│🌺⭆➤ ${prefix}Perguntas [Eu Nunca]
┃│🌺⭆➤ ${prefix}Pix [Número/Valor]
┃│🌺⭆➤ ${prefix}Eununca [Jogo]
┃│🌺⭆➤ ${prefix}Jogodaforca
┃│🌺⭆➤ ${prefix}Dado [Interativo]
┃│🌺⭆➤ ${prefix}Caracoroa 
┃│🌺⭆➤ ${prefix}Minerar
┃│🌺⭆➤ ${prefix}Quando [Pergunta]
┃│🌺⭆➤ ${prefix}Apostar [Valor]
┃│🌺⭆➤ ${prefix}Pescar
┃│🌺⭆➤ ${prefix}Steal [@]
┃│🌺⭆➤ ${prefix}Churrasco
┃╰══ ⪨
╰╦══════════════════ ⪨
╭┤き⃟🌺𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑🌺⃟ き
┃│🌺⭆➤ ${prefix}Wallpaper [Texto]
┃│🌺⭆➤ ${prefix}Wallpaperanime
┃│🌺⭆➤ ${prefix}Listawallpaper
┃╰══ ⪨
╰╦══════════════════ ⪨
╭┤き⃟🌺𝐄𝐅𝐄𝐈𝐓𝐎𝐒 𝐏/𝐈𝐌𝐆🌺⃟ き
┃│🌺⭆➤ ${prefix}Lgbt [Marcar-img]
┃│🌺⭆➤ ${prefix}Comunismo [Marcar-img]
┃│🌺⭆➤ ${prefix}Bolsonaro [Marcar-img]
┃│🌺⭆➤ ${prefix}Affect [Marcar-img]
┃│🌺⭆➤ ${prefix}Blur [Marcar-img]
┃│🌺⭆➤ ${prefix}Blackdiscord [Marcar-img]
┃│🌺⭆➤ ${prefix}Bluediscord [Marcar-img]
┃│🌺⭆➤ ${prefix}Beautiful [Marcar-img]
┃│🌺⭆➤ ${prefix}Circle [Marcar-img]
┃│🌺⭆➤ ${prefix}Del [Marcar-img]
┃│🌺⭆➤ ${prefix}Facepalm [Marcar-img]
┃│🌺⭆➤ ${prefix}Invert [Marcar-img]
┃│🌺⭆➤ ${prefix}Jail [Marcar-img]
┃│🌺⭆➤ ${prefix}Rip [Marcar-img]
┃│🌺⭆➤ ${prefix}Trash [Marcar-img]
┃│🌺⭆➤ ${prefix}Wasted [Marcar-img]
┃│🌺⭆➤ ${prefix}Sepia [Marcar-img]
┃│🌺⭆➤ ${prefix}Pixelate [Marcar-img]
┃│🌺⭆➤ ${prefix}Bnw [Marcar-img]
┃╰══ ⪨
╰╦══════════════════ ⪨
╭┤き⃟🌺𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐒🌺⃟ き
┃│🌺⭆➤ ${prefix}Ytmp3 [Link]
┃│🌺⭆➤ ${prefix}Ytmp4 [Link]
┃│🌺⭆➤ ${prefix}Play [Nome] 
┃│🌺⭆➤ ${prefix}Play2 [Nome] 
┃│🌺⭆➤ ${prefix}Play3 [Nome]
┃│🌺⭆➤ ${prefix}Play4 [Nome]

┃│🌺⭆➤ ${prefix}Play_video [Nome]
┃│🌺⭆➤ ${prefix}Play_audio [Nome]
┃│🌺⭆➤ ${prefix}Ytmp3 [Link]
┃│🌺⭆➤ ${prefix}Ytmp4 [Link]
┃│🌺⭆➤ ${prefix}Playlist [Link da Playlist]
┃│🌺⭆➤ ${prefix}Audiomeme [Nome] 
┃│🌺⭆➤ ${prefix}Ringtone [Nome] 
┃│🌺⭆➤ ${prefix}Tiktok [Link]
┃│🌺⭆➤ ${prefix}Tiktok2 [Link]
┃│🌺⭆➤ ${prefix}Tiktok3 [Link]
┃│🌺⭆➤ ${prefix}Instagram [Link]
┃│🌺⭆➤ ${prefix}Instagram2 [Link]
┃│🌺⭆➤ ${prefix}Instagram3 [Link]
┃│🌺⭆➤ ${prefix}Instafoto [Link]
┃│🌺⭆➤ ${prefix}Twitter [Link]
┃│🌺⭆➤ ${prefix}Twitter2 [Link]
┃│🌺⭆➤ ${prefix}Facebook [Link]
┃│🌺⭆➤ ${prefix}Facebook2 [Link]
┃│🌺⭆➤ ${prefix}Pinterest [Texto]
┃│🌺⭆➤ ${prefix}Pinterestvid [Link]
┃│🌺⭆➤ ${prefix}Kwai [Link]
┃│🌺⭆➤ ${prefix}SoundCloud [Link] 
┃│🌺⭆➤ ${prefix}Mediafire [Link] 
┃│🌺⭆➤ ${prefix}Mediafire2 [Link] 
┃│🌺⭆➤ ${prefix}Spotify [Link da Música]
┃╰══ ⪨ 
╰╦══════════════════ ⪨
╭┤き⃟🌺𝐌𝐔́𝐒𝐈𝐂𝐀𝐒🌺⃟ き
┃│🌺⭆➤ ${prefix}Motta
┃│🌺⭆➤ ${prefix}Nanasai
┃│🌺⭆➤ ${prefix}Dri
┃│🌺⭆➤ ${prefix}Thefox
┃│🌺⭆➤ ${prefix}Mikezin
┃│🌺⭆➤ ${prefix}Magyn
┃│🌺⭆➤ ${prefix}Lilchainz
┃│🌺⭆➤ ${prefix}Vmz
┃│🌺⭆➤ ${prefix}Kamaitachi
┃│🌺⭆➤ ${prefix}Mp3inter [Quantidade]
┃╰══ ⪨
╰╦══════════════════ ⪨
╭┤き⃟🌺𝐅𝐑𝐀𝐒𝐄𝐒🌺⃟ き
┃│🌺⭆➤ ${prefix}Conselhobiblico
┃│🌺⭆➤ ${prefix}Fuckmylife
┃│🌺⭆➤ ${prefix}Cantadas
┃│🌺⭆➤ ${prefix}Pensador [Nome]
┃│🌺⭆➤ ${prefix}Frasecriativas
┃│🌺⭆➤ ${prefix}Frasebonita
┃│🌺⭆➤ ${prefix}Recadoswpp
┃╰══ ⪨
╰╦══════════════════ ⪨
╭┤き⃟🌺𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒🌺⃟ き
┃│🌺⭆➤ ${prefix}Ttp [Seu-Texto] 
┃│🌺⭆➤ ${prefix}Attp [Seu-Texto] 
┃│🌺⭆➤ ${prefix}Attp2 [Seu-Texto] 
┃│🌺⭆➤ ${prefix}Attp3 [Seu-Texto] 
┃│🌺⭆➤ ${prefix}Attp4 [Seu-Texto] 
┃│🌺⭆➤ ${prefix}Attp5 [Seu-Texto] 
┃│🌺⭆➤ ${prefix}Attp6 [Seu-Texto] 
┃│🌺⭆➤ ${prefix}Attp8 [Seu-Texto] 
┃│🌺⭆➤ ${prefix}Attp9 [Seu-Texto] 
┃│🌺⭆➤ ${prefix}Attp10 [Seu-Texto] 
┃│🌺⭆➤ ${prefix}Figaleatoria
┃│🌺⭆➤ ${prefix}Packfigu
┃│🌺⭆➤ ${prefix}Figurinhas [Quantidade] 
┃│🌺⭆➤ ${prefix}Figurinhas2 [Quantidade] 
┃│🌺⭆➤ ${prefix}Figu_memes [Quantidade] 
┃│🌺⭆➤ ${prefix}Figu_flork [Quantidade] 
┃│🌺⭆➤ ${prefix}Figu_emoji [Quantidade] 
┃│🌺⭆➤ ${prefix}Figu_coreana [Quantidade] 
┃│🌺⭆➤ ${prefix}Figu_bebe [Quantidade] 
┃│🌺⭆➤ ${prefix}Figu_anime [Quantidade] 
┃│🌺⭆➤ ${prefix}Figu_engracada [Quantidade] 
┃│🌺⭆➤ ${prefix}Figu_animais [Quantidade] 
┃│🌺⭆➤ ${prefix}Figu_desenho [Quantidade] 
┃│🌺⭆➤ ${prefix}Figu_raiva [Quantidade] 
┃│🌺⭆➤ ${prefix}Figu_roblox [Quantidade] 
┃│🌺⭆➤ ${prefix}Stickersearch [Nome]
┃│🌺⭆➤ ${prefix}Toimg [Marcar-Fig] 
┃│🌺⭆➤ ${prefix}Togif [Marcar-Fig] 
┃│🌺⭆➤ ${prefix}Sticker [Marcar-Foto] 
┃│🌺⭆➤ ${prefix}Sfundo [Texto1|Texto2] 
┃│🌺⭆➤ ${prefix}Semoji [Emoji] 
┃│🌺⭆➤ ${prefix}Rename [Marcar-Fig]  
┃│🌺⭆➤ ${prefix}Rename2 [Marcar-Fig]  
┃│🌺⭆➤ ${prefix}Telesticker [Link]  
┃│🌺⭆➤ ${prefix}Legenda [Texto] 
┃│🌺⭆➤ ${prefix}Legenda2 [Txt|Txt]
┃│🌺⭆➤ ${prefix}Cstiker [Marcar-Foto] 
┃│🌺⭆➤ ${prefix}Sfundo [Marcar-Foto]
┃╰══ ⪨
╰╦══════════════════ ⪨
╭┤き⃟🌺𝐀𝐋𝐄𝐀𝐓𝐎𝐑𝐈𝐎𝐒🌺⃟ き
┃│🌺⭆➤ ${prefix}Encurtalink
┃│🌺⭆➤ ${prefix}Listabr
┃│🌺⭆➤ ${prefix}Listafake
┃│🌺⭆➤ ${prefix}Listaddi
┃│🌺⭆➤ ${prefix}Lista-online
┃│🌺⭆➤ ${prefix}Traduzir [Texto]
┃│🌺⭆➤ ${prefix}Gtts pt [Texto] 
┃│🌺⭆➤ ${prefix}Metadinha
┃│🌺⭆➤ ${prefix}Metadinha2
┃│🌺⭆➤ ${prefix}Metadinha3
┃│🌺⭆➤ ${prefix}Metadinha4
┃│🌺⭆➤ ${prefix}Packedits
┃│🌺⭆➤ ${prefix}Duelo [@/@/tempo]
┃│🌺⭆➤ ${prefix}Gatinhos
┃│🌺⭆➤ ${prefix}Encurtalink [Link]
┃│🌺⭆➤ ${prefix}Gerarnick [Texto]
┃│🌺⭆➤ ${prefix}Infogrupo
┃│🌺⭆➤ ${prefix}Videopralink [Mencione vid]
┃│🌺⭆➤ ${prefix}Imgpralink [Mencione img]
┃│🌺⭆➤ ${prefix}Fakemsg [@|Msg|Msg2]
┃│🌺⭆➤ ${prefix}Tomp3 [Mencione vid]
┃│🌺⭆➤ ${prefix}Level
┃│🌺⭆➤ ${prefix}Ranklevel
┃│🌺⭆➤ ${prefix}Correio [Número/Mensagem]
┃│🌺⭆➤ ${prefix}Wame [Mensagem q deseja]
┃╰══ ⪨
╰═══════════════════ ⪨`
}

exports.menu = menu

// MENU DE LOGOS
const menulogos = (prefix) => {

  return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​╭═══════════════════ ⪩
╰╮き⃟🌺𝐌𝐄𝐍𝐔 𝐋𝐎𝐆𝐎𝐒🌺⃟ き
┃╰══ ⪨
╰╦══════════════════ ⪨
╭┤き⃟🌺𝐋𝐎𝐆𝐎𝐒-𝐕𝐈𝐃𝐄𝐎🌺⃟ き
┃│🌺⭆➤ ${prefix}Pubgv [txt]
┃│🌺⭆➤ ${prefix}Natalmsg [txt]
┃│🌺⭆➤ ${prefix}Anonovo [txt]
┃│🌺⭆➤ ${prefix}Trigrev [txt]
┃╰══ ⪨
╰╦══════════════════ ⪨
╭┤き⃟🌺𝟐 𝐓𝐄𝐗𝐓𝐎𝐒🌺⃟ き
┃│🌺⭆➤ ${prefix}Comporn [txt/txt]
┃│🌺⭆➤ ${prefix}Glitch [txt/txt]
┃│🌺⭆➤ ${prefix}Glitch3 [txt/txt]
┃│🌺⭆➤ ${prefix}Grafity [txt-txt]
┃│🌺⭆➤ ${prefix}Space [txt/txt]
┃│🌺⭆➤ ${prefix}Marvel [txt/txt]
┃│🌺⭆➤ ${prefix}GamePlay [txt/txt]
┃│🌺⭆➤ ${prefix}Stone [txt/txt]
┃│🌺⭆➤ ${prefix}Steel [txt/txt]
┃│🌺⭆➤ ${prefix}Ffbanner [txt/txt]
┃│🌺⭆➤ ${prefix}Avatar [txt/txt]
┃│🌺⭆➤ ${prefix}Videogame [txt/txt]
┃│🌺⭆➤ ${prefix}Pubg [txt/txt]
┃╰══ ⪨
╰╦══════════════════ ⪨
╭┤き⃟🌺𝟏 𝐓𝐄𝐗𝐓𝐎🌺⃟ き
┃│🌺⭆➤ ${prefix}Neonlight [txt]
┃│🌺⭆➤ ${prefix}Orangejuice [txt]
┃│🌺⭆➤ ${prefix}Rainbowequalizer [txt]
┃│🌺⭆➤ ${prefix}Peridot [txt]
┃│🌺⭆➤ ${prefix}Rock [txt]
┃│🌺⭆➤ ${prefix}Purpleshiny [txt]
┃│🌺⭆➤ ${prefix}Robotr2 [txt]
┃│🌺⭆➤ ${prefix}Berry [txt]
┃│🌺⭆➤ ${prefix}Shadow-sky [txt]
┃│🌺⭆➤ ${prefix}Metallic [txt]
┃│🌺⭆➤ ${prefix}Logoneon [txt]
┃│🌺⭆➤ ${prefix}Ninjalogo [txt]
┃│🌺⭆➤ ${prefix}Harry-potter [txt]
┃│🌺⭆➤ ${prefix}Flower-typography [txt]
┃│🌺⭆➤ ${prefix}Butterfly [txt]
┃│🌺⭆➤ ${prefix}Illuminated-metallic [txt]
┃│🌺⭆➤ ${prefix}Sweet-candy [txt]
┃│🌺⭆➤ ${prefix}Strawberry [txt]
┃│🌺⭆➤ ${prefix}Seta [txt]
┃│🌺⭆➤ ${prefix}Grafite [txt]
┃│🌺⭆➤ ${prefix}Goldt [txt]
┃│🌺⭆➤ ${prefix}Tela [txt]
┃│🌺⭆➤ ${prefix}3dboxtxt [txt]
┃│🌺⭆➤ ${prefix}Chocolate-cake [txt]
┃│🌺⭆➤ ${prefix}Magma [txt]
┃│🌺⭆➤ ${prefix}Green-horror [txt]
┃│🌺⭆➤ ${prefix}Blackpink2 [txt]
┃│🌺⭆➤ ${prefix}Logobear [txt]
┃│🌺⭆➤ ${prefix}Flaming [txt]
┃│🌺⭆➤ ${prefix}Carved-wood [txt]
┃│🌺⭆➤ ${prefix}Night-sky [txt]
┃│🌺⭆➤ ${prefix}Naturalleaves [txt]
┃│🌺⭆➤ ${prefix}Candycane [txt]
┃│🌺⭆➤ ${prefix}Christmas [txt]
┃│🌺⭆➤ ${prefix}Merrychristmas [txt]
┃│🌺⭆➤ ${prefix}3ddeep [txt]
┃│🌺⭆➤ ${prefix}Drug [txt]
┃│🌺⭆➤ ${prefix}Americanflag [txt]
┃│🌺⭆➤ ${prefix}Scifi [txt]
┃│🌺⭆➤ ${prefix}Sandsummer [txt]
┃│🌺⭆➤ ${prefix}Desfocado [txt]
┃│🌺⭆➤ ${prefix}Vietnam [txt]
┃│🌺⭆➤ ${prefix}Brilhante [txt]
┃│🌺⭆➤ ${prefix}Sandwriting [txt]
┃│🌺⭆➤ ${prefix}Sandengraved [txt]
┃│🌺⭆➤ ${prefix}Summerysand [txt]
┃│🌺⭆➤ ${prefix}Glue [txt]
┃│🌺⭆➤ ${prefix}Dark [txt]
┃│🌺⭆➤ ${prefix}Galaxystyle [txt]
┃│🌺⭆➤ ${prefix}Minion [txt]
┃│🌺⭆➤ ${prefix}Horrorgift [txt]
┃│🌺⭆➤ ${prefix}Holographic [txt]
┃│🌺⭆➤ ${prefix}Deluxe [txt]
┃│🌺⭆➤ ${prefix}Glossyblue [txt]
┃│🌺⭆➤ ${prefix}Deluxegold [txt]
┃│🌺⭆➤ ${prefix}Glossycarbon [txt]
┃│🌺⭆➤ ${prefix}Fabric [txt]
┃│🌺⭆➤ ${prefix}Watercolor [txt]
┃│🌺⭆➤ ${prefix}1917 [txt]
┃│🌺⭆➤ ${prefix}Multicolor [txt]
┃│🌺⭆➤ ${prefix}Generator [txt]
┃│🌺⭆➤ ${prefix}Wonderful [txt]
┃│🌺⭆➤ ${prefix}Holiday [txt]
┃│🌺⭆➤ ${prefix}Technology [txt]
┃│🌺⭆➤ ${prefix}Winter [txt]
┃│🌺⭆➤ ${prefix}Neontext [txt]
┃│🌺⭆➤ ${prefix}Halloweenfire [txt]
┃│🌺⭆➤ ${prefix}Metaldark [txt]
┃│🌺⭆➤ ${prefix}Darkgold [txt]
┃│🌺⭆➤ ${prefix}Wicker [txt]
┃│🌺⭆➤ ${prefix}Firework [txt]
┃│🌺⭆➤ ${prefix}Steeltext [txt]
┃│🌺⭆➤ ${prefix}Goldfoil [txt]
┃│🌺⭆➤ ${prefix}Ultragloss [txt]
┃│🌺⭆➤ ${prefix}Denimtext [txt]
┃│🌺⭆➤ ${prefix}Stargreen [txt]
┃│🌺⭆➤ ${prefix}Captain [txt]
┃│🌺⭆➤ ${prefix}Toxic [txt]
┃│🌺⭆➤ ${prefix}Ninjalogo [txt]
┃│🌺⭆➤ ${prefix}Txtquadrinhos [txt]
┃│🌺⭆➤ ${prefix}HackNeon [txt]
┃│🌺⭆➤ ${prefix}EquipeMascote [txt]
┃│🌺⭆➤ ${prefix}FFavatar [txt]
┃│🌺⭆➤ ${prefix}Gizquadro [txt]
┃│🌺⭆➤ ${prefix}Angelglx [txt]
┃│🌺⭆➤ ${prefix}WingEffect [txt]
┃│🌺⭆➤ ${prefix}Angelwing [txt]
┃│🌺⭆➤ ${prefix}Blackpink [txt]
┃│🌺⭆➤ ${prefix}Girlmascote [txt]
┃│🌺⭆➤ ${prefix}Mascotegame [txt]
┃│🌺⭆➤ ${prefix}Fpsmascote [txt]
┃│🌺⭆➤ ${prefix}Logogame [txt]
┃│🌺⭆➤ ${prefix}Glitch2 [txt]
┃│🌺⭆➤ ${prefix}3DGold [txt]
┃│🌺⭆➤ ${prefix}Placaloli [txt]
┃│🌺⭆➤ ${prefix}Phadow [txt]
┃│🌺⭆➤ ${prefix}Efeitoneon [txt]
┃│🌺⭆➤ ${prefix}Cemiterio [txt]
┃│🌺⭆➤ ${prefix}Metalgold [txt]
┃│🌺⭆➤ ${prefix}Narutologo [txt]
┃│🌺⭆➤ ${prefix}Fire [txt]
┃│🌺⭆➤ ${prefix}Romantic [txt]
┃│🌺⭆➤ ${prefix}Smoke [txt]
┃│🌺⭆➤ ${prefix}Papel [txt]
┃│🌺⭆➤ ${prefix}Lovemsg [txt]
┃│🌺⭆➤ ${prefix}Lovemsg2 [txt]
┃│🌺⭆➤ ${prefix}Lovemsg3 [txt]
┃│🌺⭆➤ ${prefix}Coffecup [txt]
┃│🌺⭆➤ ${prefix}Coffecup2 [txt]
┃│🌺⭆➤ ${prefix}Cup [txt]
┃│🌺⭆➤ ${prefix}Florwooden [txt]
┃│🌺⭆➤ ${prefix}Lobometal [txt]
┃│🌺⭆➤ ${prefix}Harryp [txt]
┃│🌺⭆➤ ${prefix}Txtborboleta [txt]
┃│🌺⭆➤ ${prefix}Madeira [txt]
┃│🌺⭆➤ ${prefix}Pornhub [txt]
┃│🌺⭆➤ ${prefix}Escudo [txt]
┃│🌺⭆➤ ${prefix}Transformer [txt]
┃│🌺⭆➤ ${prefix}America [txt]
┃│🌺⭆➤ ${prefix}Demongreen [txt]
┃│🌺⭆➤ ${prefix}Wetglass [txt] 
┃│🌺⭆➤ ${prefix}Toxic [txt]
┃│🌺⭆➤ ${prefix}Neon3 [txt]
┃│🌺⭆➤ ${prefix}Neondevil [txt]
┃│🌺⭆➤ ${prefix}Neongreen [txt]
┃│🌺⭆➤ ${prefix}Lava [txt]
┃│🌺⭆➤ ${prefix}Halloween [txt]
┃│🌺⭆➤ ${prefix}Neondevil [txt]
┃│🌺⭆➤ ${prefix}DemonFire [txt]
┃│🌺⭆➤ ${prefix}DemonGreen [txt]
┃│🌺⭆➤ ${prefix}Thunderv2 [txt]
┃│🌺⭆➤ ${prefix}Thunder [txt]
┃│🌺⭆➤ ${prefix}Colaq [txt]
┃│🌺⭆➤ ${prefix}Luxury [txt]
┃│🌺⭆➤ ${prefix}Berry [txt]
┃│🌺⭆➤ ${prefix}Transformer [txt]
┃│🌺⭆➤ ${prefix}Matrix [txt]
┃│🌺⭆➤ ${prefix}Horror [txt]
┃│🌺⭆➤ ${prefix}Nuvem [txt]
┃│🌺⭆➤ ${prefix}Neon [txt]
┃│🌺⭆➤ ${prefix}Neon1 [txt]
┃│🌺⭆➤ ${prefix}Neon2 [txt]
┃│🌺⭆➤ ${prefix}Neon3d [txt]
┃│🌺⭆➤ ${prefix}NeonGreen [txt]
┃│🌺⭆➤ ${prefix}Neon3 [txt]
┃│🌺⭆➤ ${prefix}Neve [txt]
┃│🌺⭆➤ ${prefix}Areia [txt]
┃│🌺⭆➤ ${prefix}Vidro [txt]
┃│🌺⭆➤ ${prefix}Style [txt]
┃│🌺⭆➤ ${prefix}Pink [txt]
┃│🌺⭆➤ ${prefix}Carbon [txt]
┃│🌺⭆➤ ${prefix}Tetalblue [txt]
┃│🌺⭆➤ ${prefix}Jeans [txt]
┃│🌺⭆➤ ${prefix}Ossos [txt]
┃│🌺⭆➤ ${prefix}Asfalto [txt]
┃│🌺⭆➤ ${prefix}3dgoldenblack [txt]
┃│🌺⭆➤ ${prefix}3d_business [txt]
┃│🌺⭆➤ ${prefix}Summer [txt]
┃│🌺⭆➤ ${prefix}Natal [txt]
┃│🌺⭆➤ ${prefix}Jokerlogo [txt]
┃│🌺⭆➤ ${prefix}Blood [txt]
┃│🌺⭆➤ ${prefix}Break [txt]
┃│🌺⭆➤ ${prefix}Fiction [txt]
┃│🌺⭆➤ ${prefix}3dstone [txt]
┃│🌺⭆➤ ${prefix}Lapis [txt]
┃│🌺⭆➤ ${prefix}Gelo [txt]
┃│🌺⭆➤ ${prefix}Rainbow [txt]
┃│🌺⭆➤ ${prefix}Metalfire [txt] 
┃│🌺⭆➤ ${prefix}Cria [txt] 
┃│🌺⭆➤ ${prefix}Anime1 [txt] 
┃│🌺⭆➤ ${prefix}Anime2 [txt] 
┃│🌺⭆➤ ${prefix}Ff1 [txt] 
┃│🌺⭆➤ ${prefix}Ff2 [txt] 
┃│🌺⭆➤ ${prefix}Game [txt] 
┃│🌺⭆➤ ${prefix}Entardecer [txt] 
┃│🌺⭆➤ ${prefix}Indian [txt] 
┃│🌺⭆➤ ${prefix}Ffrose [txt] 
┃│🌺⭆➤ ${prefix}Ffgren [txt] 
┃│🌺⭆➤ ${prefix}Chufuyu [txt] 
┃│🌺⭆➤ ${prefix}Wolf [txt] 
┃│🌺⭆➤ ${prefix}Dragonred [txt] 
┃│🌺⭆➤ ${prefix}Purple [txt] 
┃╰══ ⪨
╰═══════════════════ ⪨
`
}

exports.menulogos = menulogos

// MENU DO PROPRIETÁRIO
const menudono = (prefix) => {

  return `╭═══════════════════ ⪩
╰╮き⃟️🌺𝐌𝐄𝐍𝐔 𝐃𝐎𝐍𝐎🌺️⃟ き
╭┤🌺⭆➤ ${prefix}Configurar-token [Seu token]
┃│🌺⭆➤ ${prefix}Configurar-key [Sua apikey]
┃│🌺⭆➤ ${prefix}Nick-dono [Nome do dono]
┃│🌺⭆➤ ${prefix}Nome-bot [Nome do bot]
┃│🌺⭆➤ ${prefix}Numero-dono [Número do dono]
┃│🌺⭆➤ ${prefix}Prefixo-bot [Prefixo q vc quer]
┃│🌺⭆➤ ${prefix}Foto-menu [Mencione a img]
┃│🌺⭆➤ ${prefix}Verificado-global [Desativa todos os verificados do bot]
┃│🌺⭆➤ ${prefix}Console [Não mostra os logs no terminal]
┃│🌺⭆➤ ${prefix}Gerar_qrcode [Apaga o qr-code]
┃│🌺⭆➤ ${prefix}Limpar_qr [Diminuir o peso do qr]
┃│🌺⭆➤ ${prefix}Dono1 [Número/@Mencione]
┃│🌺⭆➤ ${prefix}Dono2 [Número/@Mencione]
┃│🌺⭆➤ ${prefix}Dono3 [Número/@Mencione]
┃│🌺⭆➤ ${prefix}Dono4 [Número/@Mencione]
┃│🌺⭆➤ ${prefix}Dono5 [Número/@Mencione]
┃│🌺⭆➤ ${prefix}Dono6 [Número/@Mencione]
┃│🌺⭆➤ ${prefix}Enviar-index [Envia o index.js]
┃│🌺⭆➤ ${prefix}Enviar-index2 [Envia o sabrina.js]
┃│🌺⭆➤ ${prefix}Vemqrcode [Envia o qr-code]
┃│🌺⭆➤ ${prefix}Update-index [sabrina.js]
┃│🌺⭆➤ ${prefix}Uptade-index2 [index.js]
┃│🌺⭆➤ ${prefix}Premiumlist
┃│🌺⭆➤ ${prefix}Serpremium
┃│🌺⭆➤ ${prefix}Addpremium [@Mencione]
┃│🌺⭆➤ ${prefix}Delpremium [@Mencione]
┃│🌺⭆➤ ${prefix}Reiniciar
┃│🌺⭆➤ ${prefix}Reviverqr
┃│🌺⭆➤ ${prefix}Arquivargp
┃│🌺⭆➤ ${prefix}Criargp [Nome desejado]
┃│🌺⭆➤ ${prefix}Lista_aluguel [Ver os grupos que está sendo alugados]
┃│🌺⭆➤ ${prefix}Rg_aluguel [Data|Número do dono do grupo]
┃│🌺⭆➤ ${prefix}Rm_aluguel [Id do Grupo]
┃│🌺⭆➤ ${prefix}Entrar [Link do Grupo]
┃│🌺⭆➤ ${prefix}Antipvon
┃│🌺⭆➤ ${prefix}Antipvoff
┃│🌺⭆➤ ${prefix}Modos [Privado/Publico]
┃│🌺⭆➤ ${prefix}Fotobot [@Mencione]
┃│🌺⭆➤ ${prefix}Bcgroup [Texto q deseja]
┃│🌺⭆➤ ${prefix}Transmitir [Texto q deseja]
┃│🌺⭆➤ ${prefix}Tmpvs [Texto q deseja]
┃│🌺⭆➤ ${prefix}Fazertm [Texto q deseja]
┃│🌺⭆➤ ${prefix}Addtmgroup [Adiciona na tm]
┃│🌺⭆➤ ${prefix}Remtmgroup [Remove da tm]
┃│🌺⭆➤ ${prefix}Convidargpbot [@Mencione/Número]
┃│🌺⭆➤ ${prefix}Setnamewpp [Texto]
┃│🌺⭆➤ ${prefix}Setrecado [Texto]
┃│🌺⭆➤ ${prefix}Ativo
┃│🌺⭆➤ ${prefix}Ausente [Mensagem]
┃│🌺⭆➤ ${prefix}Msg [Numero|Msg]
┃│🌺⭆➤ ${prefix}Tempodesair [Data]
┃│🌺⭆➤ ${prefix}Blockuser [@Mencione]
┃│🌺⭆➤ ${prefix}Unblockuser [@Mencione]
┃│🌺⭆➤ ${prefix}Blockpv [@Mencione]
┃│🌺⭆➤ ${prefix}Unblockpv [@Mencione]
┃│🌺⭆➤ ${prefix}Listablock-tmp [Lista de bloqueados por tempo]
┃│🌺⭆➤ ${prefix}Block-tmp [@Mencione 1d]
┃│🌺⭆➤ ${prefix}Unblock-tmp [@Mencione]
┃│🌺⭆➤ ${prefix}Clonargp [Selecione]
┃│🌺⭆➤ ${prefix}Seradm [Vira admin]
┃│🌺⭆➤ ${prefix}Sermembro [Vira membro]
┃│🌺⭆➤ ${prefix}Divulgar [Texto de Divulgação]
┃│🌺⭆➤ ${prefix}Divulgar2 [Texto de Divulgação]
┃│🌺⭆➤ ${prefix}Divulgar3 [Link do grupo+Seu Texto]
┃│🌺⭆➤ ${prefix}Unblockcmd [Comando]
┃│🌺⭆➤ ${prefix}Blockcmd [Comando]
┃│🌺⭆➤ ${prefix}Listacomandos [Lista de cmd bloqueados]
┃│🌺⭆➤ ${prefix}Getcase [Nome do cmd]
┃│🌺⭆➤ ${prefix}Antispam [1/0]
┃│🌺⭆➤ ${prefix}Listagp [Lista-Grupos]
┃│🌺⭆➤ ${prefix}Banghost
┃│🌺⭆➤ ${prefix}Antipv [1/0]
┃╰══ ⪨
╰═══════════════════ ⪨`
}

exports.menudono = menudono

const menuprem = (prefix) => {

  return `╭═══════════════════ ⪩
╰╮き⃟️🌺𝐌𝐄𝐍𝐔-𝐏𝐑𝐄𝐌𝐈𝐔𝐌🌺️⃟ き
╭┤🌺⭆➤ ${prefix}Encurtalink [Link]
┃│🌺⭆➤ ${prefix}Encurtalink2 [Link+Nome]
┃│🌺⭆➤ ${prefix}Encurtalink3 [Link]
┃│🌺⭆➤ ${prefix}Encurtalink4 [Link]
┃│🌺⭆➤ ${prefix}Ddd [Número DDD]
┃│🌺⭆➤ ${prefix}Gerarcpf
┃│🌺⭆➤ ${prefix}Gerarcpf2
┃│🌺⭆➤ ${prefix}Gerarcnpj
┃│🌺⭆➤ ${prefix}Gerarbanco
┃│🌺⭆➤ ${prefix}Validarcnpj [Número]
┃│🌺⭆➤ ${prefix}Validarcpf [Número]
┃│🌺⭆➤ ${prefix}Apagar [Mencionar]
┃│🌺⭆➤ ${prefix}Premiumlist
┃│🌺⭆➤ ${prefix}Ebase [Texto]
┃│🌺⭆➤ ${prefix}Debase [Texto]
┃│🌺⭆➤ ${prefix}Ebinary [Texto]
┃│🌺⭆➤ ${prefix}Debinary [Texto]
┃│🌺⭆➤ ${prefix}Municipios [DDD]
┃│🌺⭆➤ ${prefix}Stalkerinsta [Usuário]
┃│🌺⭆➤ ${prefix}Stalkertiktok [Usuário]
┃│🌺⭆➤ ${prefix}Xvideos [Texto]
┃│🌺⭆➤ ${prefix}Xanimu [Texto]
┃│🌺⭆➤ ${prefix}Xnxx [Texto]
┃│🌺⭆➤ ${prefix}Hentaiimg [Texto]
┃╰══ ⪨
╰═══════════════════ ⪨
`
}

exports.menuprem = menuprem

// MENU PUXADAS - CONSULTAS
const menupuxadas = (prefix) => {

  return `╭═══════════════════ ⪩
╰╮き⃟️🌺𝑴𝑬𝑵𝑼-𝑽𝑰𝑷🌺️⃟ き
╭┤🌺⭆➤ ${prefix}Nome [Nome]
┃│🌺⭆➤ ${prefix}Tel [Telefone]
┃│🌺⭆➤ ${prefix}Tel2 [Telefone]
┃│🌺⭆➤ ${prefix}Tel3 [Telefone]
┃│🌺⭆➤ ${prefix}Tel4 [Telefone]
┃│🌺⭆➤ ${prefix}Cpf [Cpf do Alvo]
┃│🌺⭆➤ ${prefix}Cpf2 [Cpf do Alvo]
┃│🌺⭆➤ ${prefix}Cpf3 [Cpf do Alvo]
┃│🌺⭆➤ ${prefix}Cpf4 [Cpf do Alvo]
┃│🌺⭆➤ ${prefix}Cpf5 [Cpf do Alvo]
┃│🌺⭆➤ ${prefix}Cpf6 [Cpf do Alvo]
┃│🌺⭆➤ ${prefix}Vizinhos [Cpf do Alvo]
┃│🌺⭆➤ ${prefix}Beneficios [Cpf do Alvo]
┃│🌺⭆➤ ${prefix}Parentes [Cpf do Alvo]
┃│🌺⭆➤ ${prefix}Score [Cpf do Alvo]
┃│🌺⭆➤ ${prefix}Bin [Bin do Cartão]
┃│🌺⭆➤ ${prefix}Cnpj [Cnpj do Alvo]
┃│🌺⭆➤ ${prefix}Placa [Placa do Carro]
┃│🌺⭆➤ ${prefix}Placa2 [Placa do Carro]
┃│🌺⭆➤ ${prefix}Cep [Cep da Rua]
┃│🌺⭆➤ ${prefix}Banco [Código Banco]
┃│🌺⭆➤ ${prefix}Ip [Ip do Alvo]
┃╰══ ⪨
╰═══════════════════ ⪨
`
}

exports.menupuxadas = menupuxadas

// MENU BRINCADEIRAS
const brincadeiras = (prefix) => {
  
return `╭═══════════════════ ⪩
╰╮き⃟🌺𝐉𝐎𝐆𝐎𝐒🌺⃟ き
╭┤🌺⭆➤ ${prefix}Akinator
┃│🌺⭆➤ ${prefix}Jogodaforca
┃│🌺⭆➤ ${prefix}Resetforca
┃│🌺⭆➤ ${prefix}Jogodavelha [@]
┃│🌺⭆➤ ${prefix}Simi [Pergunte oq quiser]
┃│🌺⭆➤ ${prefix}Quando [Pergunte ao bot]
┃│🌺⭆➤ ${prefix}Cassino [Jogo-Frutas]
┃│🌺⭆➤ ${prefix}Eununca [Perguntas]
┃│🌺⭆➤ ${prefix}Pgt_desafio [Verdade/Desafio]
┃│🌺⭆➤ ${prefix}Saldo
┃│🌺⭆➤ ${prefix}Transferir [@]
┃│🌺⭆➤ ${prefix}Mypixkey
┃│🌺⭆➤ ${prefix}Minerar
┃│🌺⭆➤ ${prefix}Trabalhar
┃│🌺⭆➤ ${prefix}Churrasco
┃│🌺⭆➤ ${prefix}Pescar
┃│🌺⭆➤ ${prefix}Apostar [Valor]
┃│🌺⭆➤ ${prefix}Emprestimo_100
┃│🌺⭆➤ ${prefix}Emprestimo_1000
┃│🌺⭆➤ ${prefix}Emprestimo_10000
┃│🌺⭆➤ ${prefix}Emprestimo_100000
┃╰══ ⪨
╰╦══════════════════ ⪨
╭┤き⃟️🌺𝐁𝐑𝐈𝐍𝐂𝐀𝐃𝐄𝐈𝐑𝐀𝐒🌺️⃟ き
┃│🌺⭆➤ ${prefix}Pau 
┃│🌺⭆➤ ${prefix}Gadometro
┃│🌺⭆➤ ${prefix}Chifruda
┃│🌺⭆➤ ${prefix}Safada
┃│🌺⭆➤ ${prefix}Retardada
┃│🌺⭆➤ ${prefix}Vagabunda
┃│🌺⭆➤ ${prefix}Maconheira
┃│🌺⭆➤ ${prefix}Fria
┃│🌺⭆➤ ${prefix}Santa
┃│🌺⭆➤ ${prefix}Rica
┃│🌺⭆➤ ${prefix}Fofoqueira
┃│🌺⭆➤ ${prefix}Chifrudo
┃│🌺⭆➤ ${prefix}Iludido
┃│🌺⭆➤ ${prefix}Heterotop
┃│🌺⭆➤ ${prefix}Safado
┃│🌺⭆➤ ${prefix}Homofobico
┃│🌺⭆➤ ${prefix}Calculista
┃│🌺⭆➤ ${prefix}Kengo
┃│🌺⭆➤ ${prefix}Toxico
┃│🌺⭆➤ ${prefix}Retardado
┃│🌺⭆➤ ${prefix}Punheteiro
┃│🌺⭆➤ ${prefix}Vagabundo
┃│🌺⭆➤ ${prefix}Maconheiro
┃│🌺⭆➤ ${prefix}Santo
┃│🌺⭆➤ ${prefix}Frio
┃│🌺⭆➤ ${prefix}Pobre
┃│🌺⭆➤ ${prefix}Rico
┃│🌺⭆➤ ${prefix}Fofoqueiro
┃│🌺⭆➤ ${prefix}Retardado
┃│🌺⭆➤ ${prefix}Socafofo
┃│🌺⭆➤ ${prefix}Socaforte 
┃│🌺⭆➤ ${prefix}Chance [Texto]
┃│🌺⭆➤ ${prefix}Casal [Aleatoriamente]
┃│🌺⭆➤ ${prefix}Shipo [@Mencione]
┃│🌺⭆➤ ${prefix}Alma-gemeas
┃│🌺⭆➤ ${prefix}Duelo [@/@/Minuto]
┃│🌺⭆➤ ${prefix}Gay [@Mencione]
┃│🌺⭆➤ ${prefix}Feio [@Mencione]
┃│🌺⭆➤ ${prefix}Matar [@Mencione]
┃│🌺⭆➤ ${prefix}Vesgo [@Mencione]
┃│🌺⭆➤ ${prefix}Bebado [@Mencione]
┃│🌺⭆➤ ${prefix}Gado [@Mencione]
┃│🌺⭆➤ ${prefix}Gostoso [@Mencione]
┃│🌺⭆➤ ${prefix}Gostosa [@Mencione]
┃│🌺⭆➤ ${prefix}Beijo [@Mencione]
┃│🌺⭆➤ ${prefix}Tapa [@Mencione]
┃│🌺⭆➤ ${prefix}Chutar [@Mencione]
┃│🌺⭆➤ ${prefix}Dogolpe [@Mencione]
┃│🌺⭆➤ ${prefix}Amongus [@Mencione]
┃│🌺⭆➤ ${prefix}Nazista [@Mencione]
┃╰══ ⪨
╰╦══════════════════ ⪨
╭┤き⃟️🌺𝐂𝐌𝐃𝐒-𝐑𝐀𝐍𝐊𝐒🌺️⃟ き
┃│🌺⭆➤ ${prefix}Rankgay
┃│🌺⭆➤ ${prefix}Rankgado
┃│🌺⭆➤ ${prefix}Rankcorno
┃│🌺⭆➤ ${prefix}Rankgostosos
┃│🌺⭆➤ ${prefix}Rankgostosas
┃│🌺⭆➤ ${prefix}Ranknazista
┃│🌺⭆➤ ${prefix}Rankotakus
┃│🌺⭆➤ ${prefix}Rankpau
┃│🌺⭆➤ ${prefix}Rankativo
┃│🌺⭆➤ ${prefix}Rankinativos
┃╰══ ⪨
╰══════════════════ ⪨`
}

exports.brincadeiras = brincadeiras

// ALTERADORES DE AUDIO E VIDEO
const alteradores = (prefix) => {
  
  return `╭═══════════════════ ⪩
╰╮き⃟🌺𝐀𝐋𝐓𝐄𝐑𝐀𝐃𝐎𝐑-𝐀𝐔𝐃🌺⃟ き
╭┤🌺⭆➤ ${prefix}Bass [Marcar]
┃│🌺⭆➤ ${prefix}Blown [Marcar]
┃│🌺⭆➤ ${prefix}Deep [Marcar]
┃│🌺⭆➤ ${prefix}Earrape [Marcar]
┃│🌺⭆➤ ${prefix}Fast [Marcar]
┃│🌺⭆➤ ${prefix}Fat [Marcar]
┃│🌺⭆➤ ${prefix}Nightcore [Marcar]
┃│🌺⭆➤ ${prefix}Reverse [Marcar]
┃│🌺⭆➤ ${prefix}Robot [Marcar]
┃│🌺⭆➤ ${prefix}Slow [Marcar]
┃│🌺⭆➤ ${prefix}Smooth [Marcar]
┃│🌺⭆➤ ${prefix}Squirrel [Marcar]
┃│🌺⭆➤ ${prefix}Sombrio [Marcar]
┃│🌺⭆➤ ${prefix}Esquilo [Marcar]
┃│🌺⭆➤ ${prefix}Vozmenino [Marcar]
┃╰══ ⪨
╰╦══════════════════ ⪨
╭┤き⃟️🌺️𝐀𝐋𝐓𝐄𝐑𝐀𝐃𝐎𝐑-𝐕𝐈𝐃🌺️⃟ き
┃│🌺⭆➤ ${prefix}Videorapido [Marcar]
┃│🌺⭆➤ ${prefix}Videocontrario [Marcar]
┃│🌺⭆➤ ${prefix}Videolento [Marcar]
┃╰══ ⪨
╰╦══════════════════ ⪨
╭┤き⃟🌺️𝐃𝐔𝐁𝐋𝐀𝐆𝐄𝐌🌺⃟ き
┃│🌺⭆➤ ${prefix}Faustao [Texto]
┃│🌺⭆➤ ${prefix}Patolino [Texto]
┃│🌺⭆➤ ${prefix}Chapolin [Texto]
┃│🌺⭆➤ ${prefix}Eminem [Texto]
┃│🌺⭆➤ ${prefix}Ibere [Texto]
┃╰══ ⪨
╰═══════════════════ ⪨`
}

exports.alteradores = alteradores

// MENU PARA ADMINS
const adms = (prefix) => {

  return `
╭═══════════════════ ⪩
╰╮き⃟🌺𝐌𝐄𝐍𝐔-𝐀𝐃𝐌𝐈𝐍𝐒🌺⃟ き
╭┤🌺⭆➤ ${prefix}Tagall [Marcar tds]
┃│🌺⭆➤ ${prefix}Marcar [Marcar tds]
┃│🌺⭆➤ ${prefix}Resetaki [Akinator]
┃│🌺⭆➤ ${prefix}Autofigu-gp [1/0]
┃│🌺⭆➤ ${prefix}Hidetag [Marcar tds] 
┃│🌺⭆➤ ${prefix}Notificar
┃│🌺⭆➤ ${prefix}Criartabela [Texto] 
┃│🌺⭆➤ ${prefix}Tabelagp
┃│🌺⭆➤ ${prefix}Membros
┃│🌺⭆➤ ${prefix}Checkativo [@]
┃│🌺⭆➤ ${prefix}Atividades
┃│🌺⭆➤ ${prefix}Enquete [Texto]
┃│🌺⭆➤ ${prefix}Simih [1/0]
┃│🌺⭆➤ ${prefix}Simih2 [1/0]
┃│🌺⭆➤ ${prefix}Rg_aviso [12:00|Texto]
┃│🌺⭆➤ ${prefix}Rm_aviso
┃│🌺⭆➤ ${prefix}Anotar [Título|Mensagem]
┃│🌺⭆➤ ${prefix}Tirar_nota [Título da Anotação]
┃│🌺⭆➤ ${prefix}Anotacao [Título]
┃│🌺⭆➤ ${prefix}Anotacoes [Anotações]
┃│🌺⭆➤ ${prefix}Descgp
┃│🌺⭆➤ ${prefix}Nomegp
┃│🌺⭆➤ ${prefix}Mute [@]
┃│🌺⭆➤ ${prefix}Desmute [@]
┃│🌺⭆➤ ${prefix}Addprefixo-gp [Prefixo]
┃│🌺⭆➤ ${prefix}Remprefixo-gp
┃│🌺⭆➤ ${prefix}Ban
┃│🌺⭆➤ ${prefix}Roletarussa
┃│🌺⭆➤ ${prefix}Convidar [@ ou Número]
┃│🌺⭆➤ ${prefix}Sairgp
┃│🌺⭆➤ ${prefix}Reviver [@Mensagem]
┃│🌺⭆➤ ${prefix}Bangp
┃│🌺⭆➤ ${prefix}Unbangp
┃│🌺⭆➤ ${prefix}Kick [@Marcar]
┃│🌺⭆➤ ${prefix}Marcarwa [wa.me] 
┃│🌺⭆➤ ${prefix}Sorteio [Texto]
┃│🌺⭆➤ ${prefix}Sorteionumero [Texto]
┃│🌺⭆➤ ${prefix}Add [Número]
┃│🌺⭆➤ ${prefix}Msgtemp [Desativar/Ativar]
┃│🌺⭆➤ ${prefix}Linkgp
┃│🌺⭆➤ ${prefix}Tempo-gp [Tmp-fechar/Tmp-abrir]
┃│🌺⭆➤ ${prefix}Promover [@Marcar]
┃│🌺⭆➤ ${prefix}Rebaixar [@Marcar]
┃│🌺⭆➤ ${prefix}Tirardalista
┃│🌺⭆➤ ${prefix}Listanegra
┃│🌺⭆➤ ${prefix}Listban
┃│🌺⭆➤ ${prefix}Autoban
┃│🌺⭆➤ ${prefix}Kickfake [Ban fakes]
┃│🌺⭆➤ ${prefix}Banfake [Ban fakes]
┃╰══ ⪨
╰╦════════════ ⪨
╭┤き⃟🌺𝐀𝐍𝐓𝐈𝐒/𝐅𝐔𝐍𝐂🌺⃟ き
┃│🌺⭆➤ ${prefix}Bemvindo [1/0]
┃│🌺⭆➤ ${prefix}Autofig-pv [1/0]
┃│🌺⭆➤ ${prefix}Autofig-gp [1/0]
┃│🌺⭆➤ ${prefix}Antidocumento [1/0]  
┃│🌺⭆➤ ${prefix}Antilinkhard [1/0]
┃│🌺⭆➤ ${prefix}Antilink [1/0]
┃│🌺⭆➤ ${prefix}Antiporno [1/0]
┃│🌺⭆➤ ${prefix}Antiloc [1/0]  
┃│🌺⭆➤ ${prefix}Anticontato [1/0]
┃│🌺⭆➤ ${prefix}Antiviewone [1/0]
┃│🌺⭆➤ ${prefix}Antiaudio [1/0]
┃│🌺⭆➤ ${prefix}Antivideo [1/0]
┃│🌺⭆➤ ${prefix}Antifake [1/0]
┃│🌺⭆➤ ${prefix}Antiimg [1/0]
┃│🌺⭆➤ ${prefix}AntiCatalogo [1/0]
┃│🌺⭆➤ ${prefix}Antisticker [1/0]
┃│🌺⭆➤ ${prefix}Leveling [1/0]
┃│🌺⭆➤ ${prefix}Anagrama [1/0]
┃│🌺⭆➤ ${prefix}Quizanimais [1/0]
┃│🌺⭆➤ ${prefix}Autoreação [1/0]
┃│🌺⭆➤ ${prefix}Autorepo [1/0]
┃╰══ ⪨
╰═══════════════════ ⪨`
}

exports.adms = adms

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	delete require.cache[file]
	require(file)
})

