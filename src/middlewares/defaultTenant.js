// Callers that are not tenant-aware (e.g. a single-tenant mentoring service) do not send
// tenant_code, but every communication service operation requires it. Fall back to
// DEFAULT_TENANT_CODE so those callers keep working.
module.exports = function (req, res, next) {
	if (req.body && typeof req.body === 'object' && !req.body.tenant_code) {
		req.body.tenant_code = process.env.DEFAULT_TENANT_CODE
	}
	next()
}
