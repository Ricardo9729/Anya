const infodono = (prefix, numerodn, NickDono, NomeDoBot) => {

// NÃO APAGUE ESSE ${NickDono} nem 
//${numerodn} nem ${NomeDoBot} nem ${prefix} só se quiser apagar completo, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.

return `╭═══════════════════ ⪩
╰╮➭ 𝐏𝐫𝐨𝐩𝐫𝐢𝐞𝐭𝐚𝐫𝐢𝐨: *${NickDono}*
┃│➭ wa.me/${numerodn}
┃│➭ 𝐌𝐞𝐮 𝐩𝐫𝐞𝐟𝐢𝐱𝐨:『 ${prefix} 』
╰═══════════════════ ⪨`   
}

exports.infodono = infodono
