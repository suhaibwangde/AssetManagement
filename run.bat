IF %1.==. GOTO No1

IF EXIST %1 (
	start cmd.exe /k "%1\mongod.exe"
	start cmd.exe /k "api.bat"
	start cmd.exe /k "app.bat"
) else {
	echo "Does not exist %1"
}