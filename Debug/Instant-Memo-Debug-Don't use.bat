REM This isdebug, so don't use.
REM Created by DecSoft HTML Compiler 2022.6
REM More information at https://www.decsoftutils.com/

@ECHO OFF
CLS

REM Set our app file in APP variable
SET APP="C:\Users\hisak_pf0jq0o\Desktop\NB\Instant-Memo.dhc"

REM Set DecSoft HTML Compiler CLI path
SET COMPILER="C:\Program Files\DecSoft\HtmlCompiler\HtmlCompilerCLI.exe"

REM Call the compiler with the app file
%COMPILER% %APP% /debug

REM Pause the script execution to see the results
PAUSE

