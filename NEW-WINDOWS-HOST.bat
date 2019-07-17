@echo off
SET /p IP="Enter adress(example: 127.0.0.1) for the host front-end-challenge: "

SET HOSTS_PATH=%WINDIR%\System32\drivers\etc\hosts
SET HOST_NAME=      front-end-challenge
SET NEW_LINE=^& echo.
SET ERROR_MESSAGE=You already have a host named front-end-challenge

FIND /C /I "front-end-challenge" %WINDIR%\system32\drivers\etc\hosts

IF (%ERRORLEVEL% NEQ 0 ECHO %NEW_LINE%^%IP% %HOST_NAME% >>%HOSTS_PATH%) ELSE (
  ECHO %ERROR_MESSAGE%
)

pause

exit
