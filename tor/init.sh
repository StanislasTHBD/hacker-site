#!/bin/sh
echo "⚙️ Fixing permissions..."
chown -R tor:tor /var/lib/tor
echo "🚀 Starting Tor with custom torrc..."
exec tor -f /config/torrc
