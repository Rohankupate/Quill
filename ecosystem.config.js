module.exports = {
  apps : [{
    script: 'npm start',
    watch: '.'
  }],

  deploy : {
    production : {
      key : 'doctalker.pem',
      user : 'ubuntu',
      host : '16.171.177.26',
      ref  : 'origin/main',
      repo : 'git@github.com:Rohankupate/doctalker.git',
      path : 'home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options' : 'ForwardAgent=yes'
    }
  }
};
