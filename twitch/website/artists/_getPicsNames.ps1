$begin = "[`r`n"
$end = "]"
$list =  ((ls -n -Filter "*.png") -split "`n")
$res = $begin
foreach($thingy in $list) {
    $res += "`t{`"name`":`"https://twitch.tv/" + $thingy + "`", `"img`":`"" + $thingy + "`"},`r`n"
}
$res += $end
$res | Out-File -FilePath ./_pics.txt