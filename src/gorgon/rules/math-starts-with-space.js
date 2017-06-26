import Rule from "../rule.js";

module.exports = Rule.makeRule({
    name: "math-starts-with-space",
    selector: "math, blockMath",
    pattern: /^\s*(~|\\qquad|\\quad|\\,|\\;|\\:|\\ |\\!|\\enspace|\\phantom)/,
    message: `Math starts with space:
math should not be indented. Do not begin math expressions with
LaTeX space commands like ~, \\;, \\quad, or \\phantom`,
});