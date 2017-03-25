

echo "removing /public"
rm -rf public

echo "generating"
hugo

echo "sync'ing"
# use -anv to test syncing
rsync -av ./public/ ryanrampersad.com:www/ryanrampersad.com/public_html/
