const menuloja = (prefix) => { 

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return `
╭══════════════════⪨
┃
┃➮ *⎙* 𝐋𝐎𝐉𝐈𝐍𝐇𝐀 𝐃𝐀 𝐀𝐍𝐘𝐀 *⎙*
┃
╰══════════════════⪨
╭══════════════════⪨
┃ 𝐌𝐄𝐓𝐎𝐃𝐎𝐒 𝐃𝐄 𝐁𝐀𝐍
┃│
┃│➮ ${prefix}metodo.b
┃│➮ ${prefix}metodo.b2
┃│➮ ${prefix}metodo.bs
┃│➮ ${prefix}metodo.bs2
╰══════════════════⪨
╭══════════════════⪨
┃ 𝐙𝐀𝐏 𝐈𝐌𝐔𝐍𝐄
┃│
┃│➮ ${prefix}imune
┃│➮ ${prefix}imune2
┃│➮ ${prefix}imune3
┃│➮ ${prefix}imune4
┃│➮ ${prefix}imune5
┃│➮ ${prefix}imune6
╰═══════════════════⪨
`
}

exports.menuloja = menuloja