{
  description = "Next.js development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
      ...
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default = pkgs.mkShell {
          name = "nextjs-dev-shell";

          buildInputs = [
            pkgs.nodejs
            pkgs.openssl # Often needed for Node.js native modules
            pkgs.typescript-language-server
          ];
          NODE_OPTIONS = "--openssl-legacy-provider";
          shellHook = ''
            export PATH="$PWD/node_modules/.bin:$PATH"
            echo "Node.js version: $(node --version)"
            echo "npm version: $(npm --version)"
            echo "Ready for Next.js development!"
          '';
        };
      }
    );
}
