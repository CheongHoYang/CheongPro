@echo off
echo Starting deployment...

REM GitHub 토큰 설정 (환경변수에서 읽기)
REM set GITHUB_TOKEN=your_token_here

REM Vercel 배포
vercel --prod --yes

echo Deployment completed!
pause
