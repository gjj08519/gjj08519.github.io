Function KillThatProcess ([string]$name)
{
$name="Notepad"
Get-Process -Name "Notepad"

Write-Host -“There are processes with the name $name, proceed? Y/N”
$answer= Read-Host 

if($answer.ToUpper -ne "Y")
{
Write-Host -BackgroundColor green -ForegroundColor Black “No processes with the name N, proceed"
}
else
{
 Stop-Process -$name
}
}
 function Bamboozle([string]$path )
 {
$path="F:\ITPowershell"
$random=[char]65,[char]66,[char]67,[char]68,[char]69,[char]70,[char]71,[char]72,[char]73,[char]74,[char]75,[char]76,[char]77,[char]78,[char]79,[char]80,[char]81,[char]82,[char]83,[char]84,[char]85,[char]86,[char]87,[char]88,[char]89,[char]90 | Get-Random
Write-Host -NoNewline -backgroundColor red -ForegroundColor White "The"
Write-Host -NoNewline -backgroundColor green -ForegroundColor black " random " 
Write-Host -NoNewline -backgroundColor red -ForegroundColor White "letter is"
Write-Host -NoNewline -backgroundColor green -ForegroundColor black " $random "
 
$files = Get-ChildItem ($path+"/*$random*")| Where-Object { $_ -is [System.IO.FileInfo] }|Remove-Item -WhatIf
}