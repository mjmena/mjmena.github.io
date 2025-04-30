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
            echo "Node.js version: $(node --version)"
            echo "npm version: $(npm --version)"
            echo "Ready for Next.js development!"
          '';
        };

        packages.default = pkgs.buildNpmPackage (finalAttrs: {
          name = "portfolio";
          version = "1.0.0";

          src = pkgs.lib.cleanSource ./.;

          npmDepsHash = "sha256-bjJlnpgA6si0KFnqj6ehkqJWAmoigyDHXOlUMK42IC0=";

          # The prepack script runs the build script, which we'd rather do in the build phase.
          # npmPackFlags = [ "--ignore-scripts" ];

          NODE_OPTIONS = "--openssl-legacy-provider";

          buildPhase = ''
            npx next build
            npx next export
          '';
          installPhase = ''
            cp -r out $out
          '';

        });

      }
    );
}
