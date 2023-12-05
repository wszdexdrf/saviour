class TransmissionClient {
    constructor(url, username, password) {
        this.url = url;
        this.username = username;
        this.password = password;
    }

    // Method to make RPC requests
    async makeRequest(method, params = {}) {
        const creds = `${this.username ?? ""}:${this.password ?? ""
            }`;
        const response = await fetch(this.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${btoa(`${this.username}:${this.password}`)}`,
            },
            body: JSON.stringify({
                method,
                arguments: params,
            }),
        });

        if (!response.ok) {
            throw new Error(`RPC request failed with status ${response.status}`);
        }

        const data = await response.json();
        return data;
    }

    // Example method to get torrent list
    async getTorrents() {
        const data = await this.makeRequest('torrent-get', {
            fields: ['id', 'name', 'status', 'percentDone'],
        });

        return data.arguments.torrents;
    }

    // Example method to add a new torrent
    async addTorrent(magnetLink) {
        const data = await this.makeRequest('torrent-add', {
            filename: magnetLink,
        });

        return data.arguments['torrent-added'];
    }

    // Add more methods for other RPC calls as needed

    // BEGIN: Add your custom methods here

    // END: Add your custom methods here
}

export default TransmissionClient;
