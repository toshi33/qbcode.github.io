=begin
Slightly modified plugin from VCSJones
Source: https://github.com/vcsjones/vcsjones.com/blob/61ba0443725f73898a78bdc625df36ca3b1c3735/_plugins/sri.rb
License: CC 4.0
=end

require 'digest'

module SRI
    class SriScssHashTag < Jekyll::Tags::IncludeRelativeTag
        def cache_compiled_scss(path, context, compute)
            @@cached_scss ||= {}
            if @@cached_scss.key?(path)
                @@cached_scss[path]
            else
                @@cached_scss[path] = compute.call
            end
        end

        def render(context)
            cache_compiled_scss(@file, context, lambda {
                site = context.registers[:site]
                converter = site.find_converter_instance(Jekyll::Converters::Scss)
                result = super(context)
                scss = result.gsub(/^---.*---/m, '')
                data = converter.convert(scss)
                "sha256-#{Digest::SHA256.base64digest data}"
            })
        end

        def tag_includes_dirs(context)
            [context.registers[:site].source].freeze
        end
    end
end

Liquid::Template.register_tag('sri_scss_hash', SRI::SriScssHashTag)